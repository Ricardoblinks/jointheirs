"use client"
import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [preview, setPreview] = useState<string[]>([]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreview(urls);
    } else {
      setPreview([]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="font-heading text-3xl md:text-4xl mb-4 text-blue-900 text-center">
          GEMAEXPO L2G 2025 Registration
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Register now for the Global Export & Market Access Expo. Showcase your
          products, connect with buyers, and access training. Upload your product
          catalogue images to be featured!
        </p>
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
            Registration Deadline:{" "}
            <span className="font-bold text-blue-900">to be announced.</span>
          </span>
        </div>
        <form className="space-y-6" encType="multipart/form-data">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization/Business"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <input
            type="text"
            name="product"
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
          >
            Proceed to Payment{" "}
            {/* <ArrowRight className="h-5 w-5" /> */}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          Already registered?{" "}
          <Link
            href="/contact"
            className="text-blue-600 hover:underline"
          >
            Contact us
          </Link>{" "}
          for support.
        </div>
      </div>
    </div>
  );
}
