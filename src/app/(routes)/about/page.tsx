'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const eventImages = [
  // Extra2
  '/images/shared/Extra2/PHOTO-2025-08-03-19-18-40.jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-18-40(1).jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-05.jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-28.jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-29.jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-29(1).jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-30.jpg',
  '/images/shared/Extra2/PHOTO-2025-08-03-19-19-30(1).jpg',

  // Extras
  '/images/shared/Extras/1.jpg',
  '/images/shared/Extras/2.jpg',
  '/images/shared/Extras/3.jpg',
  '/images/shared/Extras/4.jpg',
  '/images/shared/Extras/5.jpg',
  '/images/shared/Extras/6.jpg',
  '/images/shared/Extras/7.jpg',
  '/images/shared/Extras/8.jpg',
  '/images/shared/Extras/9.jpg',
  '/images/shared/Extras/10.jpg',
  '/images/shared/Extras/11.jpg',
  '/images/shared/Extras/12.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-07(2).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-08.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-08(1).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-08(2).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-09.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-12.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-14.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-14(1).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-14(2).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-15.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-15(1).jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-17.jpg',
  '/images/shared/Extras/PHOTO-2025-07-26-13-20-17(2).jpg',
];

export default function AboutPage() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
    {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shared/landingpage-top.jpg" alt="About Hero" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-40 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-6xl mb-6">About Joint Heirs Limited</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Investing in your future. Delivering qualitative, timely, and value-based services to realize clients&apos; goals and aspirations through target-oriented professionals and innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/images/shared/officebuilding.jpg"
                alt=""
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl mb-8">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-xl mb-3 text-blue-900">Mission</h3>
                  <p className="text-gray-700">
                    To deliver qualitative, timely, and value-based services; realize clients&apos; goals and aspirations through the use of target-oriented professionals and innovative technology.
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <h3 className="font-semibold text-xl mb-3 text-green-900">Vision</h3>
                  <p className="text-gray-700">
                    To be a leading Nigerian company providing world-class services across sectors through innovation, partnership, and sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl mb-6">Leadership</h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Adanma Ogumka-Ekeji</h3>
              <p className="text-lg text-gray-600 mb-6">Managing Director/CEO</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Globally certified MSME development expert and market access specialist with over 25 years of experience in entrepreneurship and economic development.
                </p>
                <p>
                  Key roles in <strong>Beyond Oil Initiative Nigeria (BOIN)</strong> and <strong>Showcase Nigeria Initiative</strong>, driving economic diversification and youth empowerment across Nigeria.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/shared/ceo.jpg"
                alt="Adanma Ogumka-Ekeji"
                width={300}
                height={300}
                className="rounded-full shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Events Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Previous Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Highlights from our initiatives and programs across Nigeria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {eventImages.slice(0, visibleCount).map((src, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {visibleCount < eventImages.length && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links to Initiatives */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl mb-4">Explore Our Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our core programs and get involved in building Nigeria&apos;s future.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/gemaexpo" className="btn-primary px-8 py-4 rounded-xl shadow-md text-lg">GEMAEXPO L2G</Link>
            <Link href="/boin" className="btn-primary px-8 py-4 rounded-xl shadow-md text-lg">BOIN</Link>
            <Link href="/super-guides" className="btn-primary px-8 py-4 rounded-xl shadow-md text-lg">Super Guides Empowerment</Link>
            <Link href="/soni" className="btn-primary px-8 py-4 rounded-xl shadow-md text-lg">SONI</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
