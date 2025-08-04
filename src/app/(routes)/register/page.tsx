"use client";

export {}; // Make this file a module so global declarations work

declare global {
  interface Window {
    tempFormData?: Record<string, unknown>;
    tempImageFiles?: FileList | null;
  }
}

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  // Form data state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [product, setProduct] = useState("");

  // Image state
  const [catalogue, setCatalogue] = useState<FileList | null>(null);
  const [preview, setPreview] = useState<string[]>([]);

  // UI state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flutterwaveLoaded, setFlutterwaveLoaded] = useState(false);

  // Handle image selection
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setCatalogue(null);
      setPreview([]);
      return;
    }
    setCatalogue(files);
    setPreview(Array.from(files).map((f) => URL.createObjectURL(f)));
  }

  // Store form data in temporary storage before payment
  function storeFormData() {
    const formData = { name, email, phone, organization, product };
    if (typeof window !== 'undefined') {
      window.tempFormData = formData;
      window.tempImageFiles = catalogue;
    }
  }

  // Upload images to Cloudinary
  async function uploadImages(files: FileList): Promise<string[]> {
    const imageUrls: string[] = [];
    
    for (const file of Array.from(files)) {
      try {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", "jointheir-form");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dpvvmocxs/image/upload",
          { method: "POST", body: fd }
        );

        const uploadData = await res.json();
        if (uploadData.secure_url) {
          imageUrls.push(uploadData.secure_url);
        }
      } catch (uploadError) {
        console.error('Image upload error:', uploadError);
      }
    }
    
    return imageUrls;
  }

  // Define a type for form data
  interface FormData {
    name: string;
    email: string;
    phone?: string;
    organization?: string;
    product?: string;
  }

  // Submit form data to Formspree
  async function submitToFormspree(formData: FormData, imageUrls: string[]) {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      product: formData.product,
      images: imageUrls.length > 0 ? imageUrls.join(', ') : 'No images uploaded'
    };

    const res = await fetch("https://formspree.io/f/meozzorw", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Form submission failed: ${res.status}`);
    }

    return res.json();
  }

  // Define the expected Flutterwave response type
  type FlutterwaveResponse = {
    status?: string;
    [key: string]: unknown;
  };

  // Handle form submit: kick off Flutterwave
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !phone || !product || !catalogue || catalogue.length === 0) {
      setError("Please fill in all required fields and upload at least one product image.");
      return;
    }

    if (!flutterwaveLoaded) {
      setError("Payment system is still loading. Please wait a moment and try again.");
      return;
    }

    setError(null);
    setLoading(true);

    // Store form data before payment
    storeFormData();

    const base = window.location.origin + window.location.pathname;
    const tx_ref = `expo-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    const successUrl = `${base}?payment=success&tx_ref=${tx_ref}`;

    try {
      // @ts-expect-error: FlutterwaveCheckout injected by script
      FlutterwaveCheckout({
        public_key: "FLWPUBK-a9908918f6b11103587958a73a1a1564-X",
        tx_ref,
        amount: 100,
        currency: "NGN",
        payment_options: "card,mobilemoneyghana,ussd",
        redirect_url: successUrl,
        customer: { email, phone_number: phone, name },
        customizations: {
          title: "Joint Heirs: GEMAEXPO L2G 2025",
          description: "Expo registration",
          logo: "https://jointheir.netlify.app/_next/image?url=%2Fimages%2Fshared%jointheirslogo.png&w=128&q=75",
        },
        onclose: function() {
          setLoading(false);
        },
        callback: function(response: unknown) {
          const res = response as FlutterwaveResponse;
          if (res.status === "successful") {
            // Handle successful payment
            window.location.href = successUrl;
          } else {
            setLoading(false);
            setError("Payment was not successful. Please try again.");
          }
        }
      });
    } catch (err) {
      setLoading(false);
      setError("Failed to initialize payment. Please try again.");
      console.error("Flutterwave error:", err);
    }
  }

  // Handle payment success and upload
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "success") {
      (async () => {
        try {
          setError(null);
          setLoading(true);

          // Get stored form data
          const storedData = window.tempFormData;
          const storedImages = window.tempImageFiles;
          
          if (!storedData) {
            throw new Error('Form data not found. Please try registering again.');
          }

          // Upload images first
          let imageUrls: string[] = [];
          if (storedImages && storedImages.length > 0) {
            imageUrls = await uploadImages(storedImages);
          }

          // Safely convert storedData to FormData type
          const safeFormData: FormData = {
            name: typeof storedData.name === 'string' ? storedData.name : '',
            email: typeof storedData.email === 'string' ? storedData.email : '',
            phone: typeof storedData.phone === 'string' ? storedData.phone : undefined,
            organization: typeof storedData.organization === 'string' ? storedData.organization : undefined,
            product: typeof storedData.product === 'string' ? storedData.product : undefined,
          };
          await submitToFormspree(safeFormData, imageUrls);

          // Clean up temp data
          delete window.tempFormData;
          delete window.tempImageFiles;

          setSuccess(true);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unexpected error occurred. Please contact support.");
          }
          console.error('Processing error:', err);
        } finally {
          setLoading(false);
          router.replace(window.location.pathname);
        }
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  // Handle Flutterwave script load
  const handleFlutterwaveLoad = () => {
    setFlutterwaveLoaded(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Registration Successful! 🎉</h2>
            <div className="text-gray-700 space-y-3">
              <p className="text-lg">
                Thank you for registering for <strong>GEMAEXPO L2G 2025</strong>!
              </p>
              <p>
                We have successfully received your registration details and product catalogue. 
                Your payment has been processed and you&apos;re now officially registered for the expo.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-left text-sm text-blue-800 space-y-1">
                  <li>• You&apos;ll receive a confirmation email within 24 hours</li>
                  <li>• Our representative will contact you via phone to discuss your expo setup</li>
                  <li>• We&apos;ll send you the expo schedule and venue details</li>
                  <li>• Your product catalogue will be reviewed and featured in our showcase</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For any immediate questions, please contact us at{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  our support page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show processing state after payment
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="animate-spin w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Processing Your Registration</h2>
            <div className="text-gray-700 space-y-3">
              <p>Please wait while we process your registration...</p>
              <div className="space-y-2 text-sm">
                <p>✓ Payment confirmed</p>
                <p>⏳ Uploading product catalogue images</p>
                <p>⏳ Finalizing registration details</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                This may take a few moments. Please don&apos;t close this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://checkout.flutterwave.com/v3.js"
        strategy="afterInteractive"
        onLoad={handleFlutterwaveLoad}
        onError={() => setError("Failed to load payment system. Please refresh the page.")}
      />

      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="font-heading text-3xl md:text-4xl mb-4 text-blue-900 text-center">
            GEMAEXPO L2G 2025 Registration
          </h1>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              <p className="font-medium">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {!flutterwaveLoaded && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg mb-6">
              <p>Loading payment system...</p>
            </div>
          )}

          <p className="text-gray-700 text-lg mb-6 text-center">
            Register now for the Global Export & Market Access Expo. Showcase your
            products, connect with buyers, and access training. Upload your product
            catalogue images to be featured!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization/Business"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Product/Service Category *</option>
              <option value="Agriculture & Food Products">Agriculture & Food Products</option>
              <option value="Textiles & Fashion">Textiles & Fashion</option>
              <option value="Handicrafts & Arts">Handicrafts & Arts</option>
              <option value="Technology & Electronics">Technology & Electronics</option>
              <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
              <option value="Beauty & Personal Care">Beauty & Personal Care</option>
              <option value="Healthcare & Pharmaceuticals">Healthcare & Pharmaceuticals</option>
              <option value="Education & Training Services">Education & Training Services</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Logistics & Transportation">Logistics & Transportation</option>
              <option value="Energy & Environment">Energy & Environment</option>
              <option value="Construction & Real Estate">Construction & Real Estate</option>
              <option value="Tourism & Hospitality">Tourism & Hospitality</option>
              <option value="Other">Other</option>
            </select>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Product Catalogue Images *
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                required
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Accepted formats: JPG, PNG, GIF. You can upload multiple images.
              </p>
              
              <div className="flex gap-4 mt-4 flex-wrap">
                {preview.length > 0 ? (
                  preview.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt="Catalogue Preview"
                      width={100}
                      height={100}
                      className="rounded-lg border object-cover"
                    />
                  ))
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-lg border flex items-center justify-center text-gray-400 text-sm">
                    No images
                  </div>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading || !flutterwaveLoaded}
              className="btn-primary w-full py-3 text-lg rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing…" : "Proceed to Payment (₦100)"}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Already registered?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>{" "}
            for support.
          </div>
        </div>
      </div>
    </>
  );
}