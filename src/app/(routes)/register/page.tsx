"use client";
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

  // Store form data in sessionStorage before payment
  function storeFormData() {
    const formData = { name, email, phone, organization, product };
    sessionStorage.setItem('gemaexpo_form_data', JSON.stringify(formData));
    
    // Store image files as base64 for later upload
    if (catalogue) {
      const imagePromises = Array.from(catalogue).map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve({
            name: file.name,
            type: file.type,
            data: reader.result
          });
          reader.readAsDataURL(file);
        });
      });
      
      Promise.all(imagePromises).then(images => {
        sessionStorage.setItem('gemaexpo_images', JSON.stringify(images));
      });
    }
  }

  // Handle form submit: kick off Flutterwave
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Store form data before payment
    storeFormData();

    const base = window.location.origin + window.location.pathname;
    const tx_ref = `expo-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    const successUrl = `${base}?payment=success&tx_ref=${tx_ref}`;

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
    });
  }

  // Handle payment success and upload
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "success") {
      (async () => {
        try {
          setError(null);
          setLoading(true);

          // Restore form data first
          const storedData = sessionStorage.getItem('gemaexpo_form_data');
          const storedImages = sessionStorage.getItem('gemaexpo_images');
          
          if (!storedData) {
            throw new Error('Form data not found. Please try again.');
          }

          const data = JSON.parse(storedData);
          console.log('Restored data:', data);

          // Restore images
          const imageUrls: string[] = [];
          if (storedImages) {
            const images = JSON.parse(storedImages);
            console.log('Restoring images:', images.length);
            
            // Convert base64 back to files and upload
            for (const img of images) {
              try {
                const response = await fetch(img.data);
                const blob = await response.blob();
                const file = new File([blob], img.name, { type: img.type });
                
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
          }

          // Submit to Formspree with restored data
          const payload = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            organization: data.organization,
            product: data.product,
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

          // Clean up storage
          sessionStorage.removeItem('gemaexpo_form_data');
          sessionStorage.removeItem('gemaexpo_images');

          setSuccess(true);
        } catch (err) {
          console.error('Processing error:', err);
          setError(err instanceof Error ? err.message : "An unexpected error occurred.");
        } finally {
          setLoading(false);
          router.replace(window.location.pathname);
        }
      })();
    }
  }, [router]);

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
        strategy="beforeInteractive"
      />

      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="font-heading text-3xl md:text-4xl mb-4 text-blue-900 text-center">
            GEMAEXPO L2G 2025 Registration
          </h1>
          
          {error && (
            <p className="text-red-600 mb-4 text-center">{error}</p>
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
                      className="rounded-lg border"
                    />
                  ))
                ) : (
                  <Image
                    src="/images/shared/placeholder.jpg"
                    alt="Placeholder"
                    width={100}
                    height={100}
                    className="rounded-lg border"
                  />
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-lg rounded-lg flex items-center justify-center gap-2"
            >
              {loading ? "Processing…" : "Proceed to Payment"}
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