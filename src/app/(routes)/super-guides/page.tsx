import Image from 'next/image';
import Link from 'next/link';
import { Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const impactStats = [
  { label: 'Beneficiaries Trained', value: '3,500+', icon: Users, color: 'text-blue-600' },
  { label: 'Businesses Started', value: '1,200+', icon: TrendingUp, color: 'text-green-600' },
];

const focusAreas = [
  { title: 'Skills Acquisition', description: 'Sewing, soap making, candle making, and more.', icon: Award, color: 'text-pink-600' },
  { title: 'Entrepreneurship Development', description: 'Supporting startups with seed grants and business tools.', icon: TrendingUp, color: 'text-purple-600' },
  { title: 'Leadership Training', description: 'Empowering future leaders in communities.', icon: Users, color: 'text-blue-600' },
  { title: 'Access to Finance', description: 'Micro-grants and financial literacy programs.', icon: TrendingUp, color: 'text-green-600' },
];

const programs = [
  { title: 'Skill Acquisition', image: '/images/initiatives/super-guides/skills.jpg', description: 'Hands-on workshops for practical skills.' },
  { title: 'Mentorship', image: '/images/initiatives/super-guides/mentorship.jpg', description: 'Business counseling and growth support.' },
  { title: 'Seed Grants', image: '/images/initiatives/super-guides/grants.jpg', description: 'Tools of trade for new businesses.' },
];

const stories = [
  { name: 'Amina', image: '/images/initiatives/super-guides/story1.jpg', story: 'Started a soap business after training, now employs 5 women.' },
  { name: 'Chinedu', image: '/images/initiatives/super-guides/story2.jpg', story: 'Received a seed grant and opened a tailoring shop.' },
];

const partners = [
  { name: 'Vital Voices', logo: '/images/partners/vvglobal.png' },
  { name: 'FMARD', logo: '/images/partners/fmard.jpeg' },
];

export default function SuperGuidesPage() {
  return (
    <div className={`${poppins.variable} font-sans min-h-screen bg-white`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/initiatives/super-guides/women-empowerment-hero.jpg" alt="Super Guides Hero" fill className="object-cover opacity-20" priority />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-40 text-center">
        <div className="max-w-4xl mx-auto text-center py-5">

          <h1 className="font-heading text-5xl lg:text-7xl mb-8 font-bold tracking-tight">Women & Youth Empowerment</h1>
          <p className="text-2xl lg:text-3xl mb-6 text-pink-100">A Nigeria where women and youth are economically empowered and socially integrated.</p>
          <p className="text-lg mb-10 text-pink-200 max-w-3xl mx-auto">Equipping women and youth with skills, tools, and mentorship for self-reliance and economic participation.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#apply" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Apply for Training <ArrowRight className="ml-2 h-5 w-5 inline" /></Link>
            <Link href="#programs" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Explore Programs</Link>
          </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {impactStats.map((stat, idx) => (
              <div key={stat.label} className="text-center bg-white rounded-xl shadow p-8">
                <div className={`w-16 h-16 mx-auto mb-5 rounded-full bg-pink-600 text-white flex items-center justify-center shadow ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {focusAreas.map((area, idx) => (
              <div key={area.title} className="flex items-start gap-4 bg-white rounded-xl shadow p-8">
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${area.color}`}>
                  <area.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-base">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {programs.map((program, idx) => (
              <div key={program.title} className="card overflow-hidden bg-white rounded-xl shadow">
                <Image src={program.image} alt={program.title} width={400} height={200} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-2 font-semibold">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories/Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-pink-900 text-center">Success Stories</h2>
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
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-pink-900 text-center">Strategic Partners & Media</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center mb-8">
            {partners.map((partner) => (
              <Image key={partner.name} src={partner.logo} alt={partner.name} width={120} height={80} className="mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Image src="/images/initiatives/super-guides/flyer.jpg" alt="Flyer" width={200} height={120} className="rounded-xl shadow" />
            <Image src="/images/initiatives/super-guides/event-photo.jpg" alt="Event" width={200} height={120} className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl mb-8 font-bold text-pink-900">Contact & Get Involved</h2>
          <p className="text-lg mb-6">Email: <a href="mailto:adanma33@gmail.com" className="text-pink-600">adanma33@gmail.com</a> | Phone: <a href="tel:+2348173630110" className="text-pink-600">+234 8173630110</a></p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Donate</Link>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Volunteer</Link>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">Apply for Training</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
