import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Globe, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const impactStats = [
  { label: 'Initiatives Showcased', value: '200+', icon: Award, color: 'text-blue-600' },
  { label: 'States Covered', value: '36 + FCT', icon: Globe, color: 'text-green-600' },
  { label: 'Communities Impacted', value: '500+', icon: Users, color: 'text-purple-600' },
  { label: 'Awards Given', value: '50+', icon: Star, color: 'text-orange-600' }
];

const categories = [
  { title: 'Innovation', description: 'Tech, creative arts, and new solutions.' },
  { title: 'Community Development', description: 'Grassroots projects and local impact.' },
  { title: 'Women Empowerment', description: 'Women-led initiatives.' },
  { title: 'Youth Engagement', description: 'Youth-driven change.' },
];

const stories = [
  { name: 'Tech4Naija', image: '/images/initiatives/soni/story1.jpg', story: 'Empowering rural youth with coding skills.' },
  { name: 'AgroBoost', image: '/images/initiatives/soni/story2.jpg', story: 'Supporting farmers with market access.' },
];

const partners = [
  { name: 'US Embassy', logo: '/images/partners/usembassy.png' },
  { name: 'CBN', logo: '/images/partners/cbn-logo.png' },
];

export default function SoniPage() {
  return (
    <div className={`${poppins.variable} font-sans min-h-screen bg-white`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/initiatives/soni/soni-hero-innovation.jpg" alt="SONI Hero" fill className="object-cover opacity-20" priority />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-40 text-center">
                    <div className="max-w-4xl mx-auto text-center py-5">

          <h1 className="font-heading text-5xl lg:text-7xl mb-8 font-bold tracking-tight">SONI</h1>
          <p className="text-2xl lg:text-3xl mb-6 text-blue-100">Highlighting grassroots and impactful Nigerian-led initiatives.</p>
          <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">Promoting innovation, community development, women empowerment, and youth engagement across Nigeria.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#nominate" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Nominate an Initiative <ArrowRight className="ml-2 h-5 w-5 inline" /></Link>
            <Link href="#categories" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Explore Categories</Link>
          </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {impactStats.map((stat, idx) => (
              <div key={stat.label} className="text-center bg-white rounded-xl shadow p-8">
                <div className={`w-16 h-16 mx-auto mb-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((cat, idx) => (
              <div key={cat.title} className="bg-white rounded-xl shadow p-8">
                <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-base">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories/Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-blue-900 text-center">Stories of Past Honorees</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {stories.map((story, idx) => (
              <div key={story.name} className="card p-8 bg-white rounded-xl shadow flex flex-col items-center">
                <Image src={story.image} alt={story.name} width={100} height={100} className="rounded-full mb-4" />
                <h3 className="font-semibold text-lg mb-2">{story.name}</h3>
                <p className="text-gray-600 text-center">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Media */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-blue-900 text-center">Partners & Media</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center mb-8">
            {partners.map((partner) => (
              <Image key={partner.name} src={partner.logo} alt={partner.name} width={120} height={80} className="mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Image src="/images/initiatives/soni/flyer.jpg" alt="Flyer" width={200} height={120} className="rounded-xl shadow" />
            <Image src="/images/initiatives/soni/event-photo.jpg" alt="Event" width={200} height={120} className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* Nomination/Contact */}
      <section id="nominate" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-blue-900">Nominate or Partner with SONI</h2>
          <p className="text-lg mb-6">Email: <a href="mailto:adanma33@gmail.com" className="text-blue-600">adanma33@gmail.com</a> | Phone: <a href="tel:+2348173630110" className="text-blue-600">+234 8173630110</a></p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Nominate Initiative</Link>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Partner with SONI</Link>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Sponsor a Honoree</Link>
          </div>
        </div>
      </section>
    </div>
  );
}