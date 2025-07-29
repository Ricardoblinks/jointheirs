import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, 
  Users, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Award, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GEMAEXPO L2G - Global Export & Market Access Expo',
  description: 'Bridge the gap between local entrepreneurs and global markets through GEMAEXPO L2G. Annual expo promoting MSMEs to access local and global markets since 2012.',
};

const participationTypes = [
  {
    title: 'Exhibitors',
    description: 'Showcase your products and services to thousands of visitors and potential buyers',
    benefits: ['Prime exhibition space', 'Marketing materials', 'Networking opportunities', 'Media coverage'],
    icon: Award,
    color: 'bg-blue-600',
    buttonText: 'Register as Exhibitor'
  },
  {
    title: 'Volunteers',
    description: 'Support event operations and gain valuable experience in event management',
    benefits: ['Skills development', 'Certificate of participation', 'Networking', 'Reference letter'],
    icon: Users,
    color: 'bg-green-600',
    buttonText: 'Volunteer with Us'
  },
  {
    title: 'Sponsors',
    description: 'Fund program initiatives and gain brand visibility among key stakeholders',
    benefits: ['Brand visibility', 'Speaking opportunities', 'VIP networking', 'CSR recognition'],
    icon: TrendingUp,
    color: 'bg-purple-600',
    buttonText: 'Become a Sponsor'
  },
  {
    title: 'Attendees',
    description: 'Participate in training sessions, workshops, and networking events',
    benefits: ['Free training', 'Workshop materials', 'Certificate', 'Business connections'],
    icon: Target,
    color: 'bg-orange-600',
    buttonText: 'Register to Attend'
  }
];

const pastEvents = [
  {
    year: '2023',
    theme: 'Digital Transformation for MSMEs',
    attendees: '2,500+',
    exhibitors: '150+',
    image: '/images/initiatives/gemaexpo/expo-hall-attendees.jpg'
  },
  {
    year: '2022',
    theme: 'Resilient Business Models',
    attendees: '2,200+',
    exhibitors: '120+',
    image: '/images/initiatives/gemaexpo/product-exhibition-stalls.jpg'
  },
  {
    year: '2021',
    theme: 'Innovation in Challenging Times',
    attendees: '1,800+',
    exhibitors: '100+',
    image: '/images/initiatives/gemaexpo/business-training-session.jpg'
  }
];

const impactStats = [
  { label: 'Years Active', value: '12+', icon: Calendar },
  { label: 'Total Exhibitors', value: '1,500+', icon: Award },
  { label: 'Attendees Trained', value: '25,000+', icon: Users },
  { label: 'Business Connections', value: '10,000+', icon: Globe }
];

export default function GemaexpoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/initiatives/gemaexpo/gemaexpo-hero-banner.jpg"
            alt="GEMAEXPO L2G Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Global Export & Market Access Expo
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl mb-6">
              GEMAEXPO L2G
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Bridging the gap between local entrepreneurs and global markets through annual expo, training programs, and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#register" className="btn-primary text-lg px-8 py-4">
                Register for 2024 Expo
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link href="#about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl mb-6">About GEMAEXPO L2G</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>Global Export & Market Access Expo (GEMAEXPO L2G)</strong> is our flagship annual event that has been promoting Micro, Small, and Medium Enterprises (MSMEs) since 2012.
                </p>
                <p>
                  The "L2G" stands for <strong>Local to Global</strong>, representing our mission to bridge the gap between local entrepreneurs and global markets through strategic training, networking, and market access opportunities.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-xl mb-3 text-blue-900">Our Focus Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Business development and entrepreneurship training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Market access and export preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Product development and quality enhancement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Trade show training and networking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/initiatives/gemaexpo/market-access-workshop.jpg"
                alt="Market Access Workshop"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl mb-4">Who Can Participate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GEMAEXPO L2G welcomes diverse participants from across Nigeria and beyond, fostering an inclusive environment for growth and collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Youth Entrepreneurs</h3>
              <p className="text-gray-600">Young innovators looking to scale their businesses</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Women in Business</h3>
              <p className="text-gray-600">Female entrepreneurs seeking market opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Artisans & Craftspeople</h3>
              <p className="text-gray-600">Traditional and modern artisans showcasing skills</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SME Owners</h3>
              <p className="text-gray-600">Small and medium enterprise leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Opportunities */}
      <section id="register" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl mb-4">Participation Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to be involved in GEMAEXPO L2G 2024. Each participation type offers unique benefits and opportunities for growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {participationTypes.map((type, index) => (
              <div
                key={type.title}
                className="card p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mb-6 rounded-full ${type.color} text-white flex items-center justify-center`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary w-full text-center">
                  {type.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">
              Celebrating our journey and the amazing entrepreneurs we've supported
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.year}
                className="card overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={`GEMAEXPO ${event.year}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{event.theme}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{event.attendees}</div>
                      <div className="text-gray-600">Attendees</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{event.exhibitors}</div>
                      <div className="text-gray-600">Exhibitors</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Venue */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl mb-6">Location & Venue</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Annual Location</h3>
                    <p className="text-gray-600">Umuahia, Abia State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">2024 Event</h3>
                    <p className="text-gray-600">November 15-17, 2024</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-3">Why Umuahia?</h3>
                <p className="text-gray-700">
                  Umuahia serves as a strategic location in the South-East, providing easy access for entrepreneurs across Nigeria while highlighting the rich cultural and business heritage of Abia State.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/initiatives/gemaexpo/trade-show-displays.jpg"
                alt="GEMAEXPO Trade Show Displays"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl mb-6">Ready to Join GEMAEXPO L2G 2024?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to connect with thousands of entrepreneurs, access new markets, and grow your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Register Now
            </Link>
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Download Participation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}