import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sprout, 
  MapPin, 
  Users, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Globe,
  Briefcase,
  Factory
} from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'BOIN - Beyond Oil Initiative Nigeria | Economic Diversification Program',
  description: 'Discover unique viable indigenous products and create 72,000+ agribusiness value chain jobs. National program for economic diversification from oil dependency.',
};

const impactStats = [
  { label: 'Target Jobs Created', value: '72,000+', icon: Briefcase, color: 'text-blue-600' },
  { label: 'States Coverage', value: '36 + FCT', icon: MapPin, color: 'text-green-600' },
  { label: 'Annual Training', value: '14,400', icon: Users, color: 'text-orange-600' },
  { label: 'Revenue Target', value: '₦2B', icon: TrendingUp, color: 'text-purple-600' }
];

const programs = [
  {
    title: 'National Booth Camps',
    description: 'Intensive training programs focused on product development, quality enhancement, and market readiness.',
    image: '/images/initiatives/boin/agribusiness-training-field.jpg',
    benefits: [
      'Hands-on training',
      'Best practices demonstration',
      'Technology adoption',
      'Sustainable farming methods'
    ],
    icon: Sprout,
    color: 'bg-purple-600'
  },
  {
    title: 'International Market Exposure',
    description: 'Tours and training programs to expose participants to global markets and standards.',
    image: '/images/initiatives/boin/export-ready-products.jpg',
    benefits: [
      'Global market understanding',
      'Export standards training',
      'International partnerships',
      'Trade opportunities'
    ],
    icon: Globe,
    color: 'bg-orange-600'
  }
];

const focusAreas = [
  {
    title: 'Food Security',
    description: 'Promoting local food production and reducing import dependency',
    icon: Sprout,
    color: 'text-green-600'
  },
  {
    title: 'Job Creation',
    description: 'Creating sustainable employment across agricultural value chains',
    icon: Briefcase,
    color: 'text-blue-600'
  },
  {
    title: 'Export Development',
    description: 'Developing export-ready indigenous products for global markets',
    icon: Globe,
    color: 'text-purple-600'
  },
  {
    title: 'Innovation Support',
    description: 'Supporting agricultural innovation and technology adoption',
    icon: Factory,
    color: 'text-orange-600'
  }
];

const stateTargets = [
  { region: 'North Central', states: 7, participants: 140 },
  { region: 'North East', states: 6, participants: 120 },
  { region: 'North West', states: 7, participants: 140 },
  { region: 'South East', states: 5, participants: 100 },
  { region: 'South South', states: 6, participants: 120 },
  { region: 'South West', states: 6, participants: 120 }
];

export default function BoinPage() {
  return (
    <div className={`${poppins.variable} font-sans min-h-screen bg-white`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/initiatives/boin/boin-hero-agriculture.jpg"
            alt="BOIN Agriculture Focus"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-40 text-center">
          <div className="max-w-4xl mx-auto text-center py-5">
            <h1 className="font-heading text-5xl lg:text-7xl mb-8 font-bold tracking-tight">
              BOIN
            </h1>
            <p className="text-2xl lg:text-3xl mb-6 text-green-100">
              Discovering Unique Viable Indigenous Products
            </p>
            <p className="text-lg mb-10 text-green-200 max-w-3xl mx-auto">
              A national program for agribusiness development, innovation, and economic diversification. Creating 72,000+ value chain jobs across all 36 states and FCT in 5 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#apply" className="btn-primary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">
                Apply for Training
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link href="#programs" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 font-bold">Our 5-Year Impact Goals</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Ambitious targets for transforming Nigeria&apos;s agricultural sector and reducing oil dependency through strategic interventions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in bg-white rounded-xl shadow p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-5 rounded-full bg-green-600 text-white flex items-center justify-center shadow ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BOIN */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl mb-8 font-bold text-green-900">Why Beyond Oil Initiative?</h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Nigeria&apos;s economy has long depended on oil revenues, making it vulnerable to global price fluctuations. BOIN represents a strategic shift towards economic diversification through agriculture and indigenous product development.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {focusAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-4">
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
            </div>
            <div>
              <Image
                src="/images/initiatives/boin/indigenous-products-display.jpg"
                alt="Indigenous Products Display"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* National Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 font-bold">National Coverage Strategy</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to reach every state in Nigeria with tailored training programs and support systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stateTargets.map((region, index) => (
              <div
                key={region.region}
                className="card p-8 text-center animate-fade-in bg-white rounded-xl shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-xl mb-3 text-green-700">{region.region}</h3>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">{region.states}</div>
                  <div className="text-sm text-gray-600">States</div>
                  <div className="text-2xl font-bold text-green-600">{region.participants}</div>
                  <div className="text-sm text-gray-600">Annual Participants</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <div className="inline-block bg-green-50 p-8 rounded-xl">
              <div className="text-3xl font-bold text-green-700 mb-2">720</div>
              <div className="text-gray-600">Total Annual Participants Across Nigeria</div>
              <div className="text-sm text-gray-500 mt-2">20 participants per state × 36 states</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 font-bold">Programs Offered</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training and support programs designed to build capacity across the agricultural value chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="card overflow-hidden animate-fade-in bg-white rounded-xl shadow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-full ${program.color} text-white flex items-center justify-center`}>
                    <program.icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl mb-4 font-semibold">{program.title}</h3>
                  <p className="text-gray-600 mb-5">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-700">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-base">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 font-bold">How to Get Involved</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to participate in BOIN and contribute to Nigeria&apos;s economic transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="card p-10 text-center bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-heading text-xl mb-4 font-semibold">Apply for Training</h3>
              <p className="text-gray-600 mb-6">
                Join our capacity building programs and gain skills in agribusiness development, product processing, and market access.
              </p>
              <Link href="/contact" className="btn-primary w-full py-3 rounded-lg font-semibold">
                Apply Now
              </Link>
            </div>
            <div className="card p-10 text-center bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-heading text-xl mb-4 font-semibold">Sponsor a Participant</h3>
              <p className="text-gray-600 mb-6">
                Support aspiring agribusiness entrepreneurs by sponsoring their training and providing them with tools of trade.
              </p>
              <Link href="/contact" className="btn-primary w-full py-3 rounded-lg font-semibold">
                Sponsor Now
              </Link>
            </div>
            <div className="card p-10 text-center bg-white rounded-xl shadow">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-heading text-xl mb-4 font-semibold">Partner with BOIN</h3>
              <p className="text-gray-600 mb-6">
                Collaborate with us as an institutional partner to expand reach and enhance program effectiveness.
              </p>
              <Link href="/contact" className="btn-primary w-full py-3 rounded-lg font-semibold">
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 font-bold">Early Success Stories</h2>
            <p className="text-2xl text-gray-600">
              Meet some of the entrepreneurs already benefiting from BOIN initiatives
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="card p-8 bg-white rounded-xl shadow">
              <Image
                src="/images/initiatives/boin/farmers-capacity-building.jpg"
                alt="Farmer Success Story"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-semibold text-lg mb-2">Cassava Processing Cooperative</h3>
              <p className="text-gray-600 mb-3">
                A group of 25 women farmers in Ogun State increased their income by 300% after BOIN training in cassava processing and packaging.
              </p>
              <div className="text-sm text-green-600 font-medium">Ogun State • 25 Beneficiaries</div>
            </div>
            <div className="card p-8 bg-white rounded-xl shadow">
              <Image
                src="/images/initiatives/boin/value-chain-processing.jpg"
                alt="Processing Success Story"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-semibold text-lg mb-2">Palm Oil Value Chain</h3>
              <p className="text-gray-600 mb-3">
                Youth cooperative in Rivers State now exports processed palm oil products to three West African countries after BOIN support.
              </p>
              <div className="text-sm text-green-600 font-medium">Rivers State • 15 Youth Entrepreneurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl mb-8 font-bold">Ready to Transform Agriculture?</h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto font-medium">
            Join the Beyond Oil Initiative Nigeria and be part of the economic transformation that will create sustainable jobs and reduce our oil dependency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">
              Apply for Training
            </Link>
            <Link href="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold shadow-lg">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


