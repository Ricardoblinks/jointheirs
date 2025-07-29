import Link from "next/link";
import Image from "next/image";

export default function GemaexpoPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-heading text-4xl lg:text-5xl mb-4">Global Export & Market Access Expo (GEMAEXPO L2G)</h1>
            <p className="text-lg mb-6">Bridging the gap between local entrepreneurs and global markets. Annual event for MSMEs, youth, women, and artisans.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/register" className="btn-primary px-6 py-3">Register for Next Expo</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Become a Sponsor</Link>
              <Link href="#" className="btn-secondary px-6 py-3">View Past Events</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Download Participation Guide</Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/initiatives/gemaexpo/gemaexpo-hero-banner.jpg"
              alt="GEMAEXPO"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl mb-4 text-blue-900">About the Expo</h2>
        <p className="text-gray-700 mb-6">Annual event promoting MSMEs to access local and global markets. Focused on business development, market access, product development, and trade show training. Active since 2012 in Umuahia, Abia State.</p>
        <h3 className="font-heading text-xl mb-2 text-green-700">Participation Opportunities</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Exhibitors: Showcase products and services</li>
          <li>Volunteers: Support event operations</li>
          <li>Sponsors: Fund program initiatives</li>
          <li>Attendees: Participate in training and networking</li>
        </ul>
      </section>
    </div>
  );
}
