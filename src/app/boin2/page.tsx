import Link from "next/link";

export default function BoinPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-blue-900 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-heading text-4xl lg:text-5xl mb-4">Beyond Oil Initiative Nigeria (BOIN)</h1>
            <p className="text-lg mb-6">Discovering unique viable indigenous products. Diversifying Nigeria&apos;s economy from oil dependence. Target: 72,000+ agribusiness value chain actors in 5 years.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/register" className="btn-primary px-6 py-3">Apply for Training</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Sponsor a Participant</Link>
              <Link href="#" className="btn-secondary px-6 py-3">Partner with BOIN</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl mb-4 text-green-700">Program Overview</h2>
        <p className="text-gray-700 mb-6">National program for agribusiness, innovation, and indigenous product development. Coverage: All 36 states + FCT. Training target: 20 participants per state annually = 14,400 new jobs yearly.</p>
        <h3 className="font-heading text-xl mb-2 text-blue-900">Programs Offered</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>National Booth Camps</li>
          <li>Agribusiness Summits</li>
          <li>Demonstration Farms</li>
          <li>Training and Certification Programs</li>
          <li>International Market Exposure Tours</li>
        </ul>
      </section>
    </div>
  );
}
