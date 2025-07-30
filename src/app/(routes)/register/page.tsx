"use client";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [preview, setPreview] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [product, setProduct] = useState("");
  const [catalogue, setCatalogue] = useState<FileList | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setCatalogue(null);
      setPreview([]);
      return;
    }
      setCatalogue(files);
      const urls = Array.from(files).map((f) => URL.createObjectURL(f));
      setPreview(urls);
    }

    // if (files && files.length > 0) {
    //   const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    //   setPreview(urls);
      
    // } else {
    //   setPreview([]);
    // }
  
  // ✅ Define your makePayment function
  function makePayment() {
    // @ts-ignore
    FlutterwaveCheckout({
      public_key: "FLWPUBK-a9908918f6b11103587958a73a1a1564-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: 100,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "https://jointheir.netlify.app/register?paymentstatus=success",
      meta: {
        // consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email,
        phone_number: phone,
        name,
      },
      customizations: {
        title: "Joint Heirs Limited: GEMAEXPO L2G 2025",
        description: "Registration for GEMAEXPO L2G 2025 initiative",
        logo:
          "https://jointheir.netlify.app/_next/image?url=%2Fimages%2Fshared%2FJointheirslogo.jpg&w=128&q=75",
      },
    });
  }

    // upload to Cloudinary, return array of secure_urls
  async function uploadToCloudinary(): Promise<string[]> {
    if (!catalogue) return [];
    const uploadPreset = "jointheir-form";
    const cloudName = "dpvvmocxs";
    const urls: string[] = [];
    for (const file of Array.from(catalogue)) {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", uploadPreset);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: fd }
      );
      const data = await res.json();
      if (data.secure_url) urls.push(data.secure_url);
      else throw new Error("Cloudinary upload failed");
    }
    return urls;
  }

  // after cloudinary, submit to Formspree
  async function submitToFormspree(images: string[]) {
    const formspreeEndpoint = "https://formspree.io/f/xoqzrrbv";
    const payload = { name, email, phone, organization, product, images };
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Formspree submission failed");
  }

    function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // kick off flutterwave
    // @ts-ignore
    FlutterwaveCheckout({
      public_key: "FLWPUBK-a9908918f6b11103587958a73a1a1564-X",
      tx_ref: `expo-${Date.now()}`,
      amount: 100,
      currency: "NGN",
      payment_options: "card,mobilemoneyghana,ussd",
      // remove redirect_url so we stay here and use callback:
      callback: async (paymentResult: any) => {
        if (paymentResult.status !== "successful") {
          setError("Payment not successful");
          setLoading(false);
          return;
        }
        try {
          // 1. upload images
          const uploaded = await uploadToCloudinary();
          // 2. submit form
          await submitToFormspree(uploaded);
          setSuccess(true);
        } catch (err: any) {
          console.error(err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      onclose: () => {
        if (!success) {
          setLoading(false);
          setError("Payment window closed.");
        }
      },
      customer: { email, phone_number: phone, name },
      customizations: {
        title: "Joint Heirs: GEMAEXPO L2G 2025",
        description: "Expo registration",
        logo:
          "https://jointheir.netlify.app/_next/image?url=%2Fimages%2Fshared%2FJointheirslogo.jpg&w=128&q=75",
      },
    });
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-green-600">
          Registration Successful! 🎉
        </h2>
      </div>
    );
  }


  return (
    <>
      {/* ✅ Load Flutterwave script */}
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
          <form
            className="space-y-6"
            encType="multipart/form-data"
            name="gemaexpo-registration"
            method="POST"
            data-netlify="true"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   makePayment(); // Trigger Flutterwave payment
            // }}
            onSubmit={handleSubmit}

            // onSubmit={(e) => {
            //   e.preventDefault();
            //   makePayment(); // ✅ Trigger payment on form submission
            // }}
          >
            <div className="grid md:grid-cols-2 gap-6">
                <input type="hidden" name="form-name" value="gemaexpo-registration" />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
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
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                name="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization/Business"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="text"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Product/Service *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Product Catalogue Images *
              </label>
              <input
                type="file"
                name="catalogue"
                accept="image/*"
                multiple
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleImageChange}
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
              className="btn-primary w-full py-3 text-lg rounded-lg flex items-center justify-center gap-2"
            //   onClick={(e) => {
            //   e.preventDefault();
            //   makePayment(); // ✅ Trigger payment on form submission
            // }}
              disabled={loading}

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
