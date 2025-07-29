import Link from "next/link";

export default function SuperGuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-700 to-green-600 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-heading text-4xl lg:text-5xl mb-4">Super Guides Women & Youth Empowerment</h1>
            <p className="text-lg mb-6">A Nigeria where women and youth are economically empowered. Equipping women and youth with skills and tools for self-reliance.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/register" className="btn-primary px-6 py-3">Apply for Training</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Donate</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl mb-4 text-purple-700">Programs</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Skill Acquisition: Sewing, soap making, candle making, etc.</li>
          <li>Seed Grants: Tools of trade for startups</li>
          <li>Mentorship Programs: Business counseling and growth support</li>
        </ul>
        <h3 className="font-heading text-xl mb-2 text-green-700">Impact Metrics</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Beneficiaries Trained: 3,500+</li>
          <li>Businesses Started: 1,200+</li>
        </ul>
      </section>
    </div>
  );
}
