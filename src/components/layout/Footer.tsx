import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerNavigation = {
  initiatives: [
    { name: 'GEMAEXPO L2G', href: '/gemaexpo' },
    { name: 'Beyond Oil Initiative (BOIN)', href: '/boin' },
    { name: 'Super Guides Empowerment', href: '/super-guides' },
    { name: 'SONI', href: '/soni' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Partners', href: '/about#partners' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-4 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/shared/joint-heirs-logo.svg"
                alt="Joint Heirs Limited"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 text-lg">
              Investing in your future through innovative programs that empower Nigerian youth, women, and entrepreneurs since 1992.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    SATID Complex, Plot 51 Eze Ogbulafor<br />
                    Umuahia, Abia State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <a href="tel:+2348173630110" className="hover:text-white transition-colors">
                    +234 817 363 0110
                  </a>
                  <span className="mx-2">•</span>
                  <a href="tel:+2347082075635" className="hover:text-white transition-colors">
                    +234 708 207 5635
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:adanma33@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  adanma33@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Initiatives</h3>
            <ul className="space-y-3">
              {footerNavigation.initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest news about our initiatives and impact stories.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 p-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Joint Heirs Limited. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-sm">
              {footerNavigation.legal.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors px-2"
                  >
                    {item.name}
                  </Link>
                  {index < footerNavigation.legal.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nigerian Flag Colors Accent */}
      <div className="h-2 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
    </footer>
  );
}