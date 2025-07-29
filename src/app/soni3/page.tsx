import Link from "next/link";

export default function SoniPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-blue-700 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-heading text-4xl lg:text-5xl mb-4">Showcase Outstanding Nigerian Initiatives (SONI)</h1>
            <p className="text-lg mb-6">Highlighting grassroots initiatives making positive impact in Nigeria. Includes creative arts, construction, infrastructure, indigenous skills.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#" className="btn-primary px-6 py-3">Nominate an Initiative</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Partner with SONI</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Sponsor a Honoree</Link>
            </div>
          </div>
          <div className="flex-1">
            {/* <Image
              src="/images/initiatives/soni/soni-hero-innovation.jpg"
              alt="SONI"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg"
              onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
            /> */}
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl mb-4 text-orange-600">Categories</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Innovation</li>
          <li>Community Development</li>
          <li>Women Empowerment</li>
          <li>Youth Engagement</li>
          <li>Tech, Health, Agriculture, Education, Creative Arts</li>
        </ul>
        <h3 className="font-heading text-xl mb-2 text-blue-700">Nomination Process</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Who Can Apply: Individuals, NGOs, startups, community leaders</li>
          <li>Selection: Panel review based on impact, innovation, and sustainability</li>
          <li>Recognition: Awards, media features, networking opportunities</li>
        </ul>
      </section>
    </div>
  );
}
