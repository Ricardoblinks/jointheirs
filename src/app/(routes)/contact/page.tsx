'use client';

import { useState } from 'react';
// import { Metadata } from 'next';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: [
      'SATID Complex, Plot 51 Eze Ogbulafor',
      'Umuahia, Abia State, Nigeria'
    ],
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      '+234 817 363 0110',
      '+234 708 207 5635'
    ],
    color: 'text-green-600'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: [
      'adanma33@gmail.com',
      'info@jointheirslimited.com'
    ],
    color: 'text-orange-600'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 8:00 AM - 5:00 PM',
      'Saturday: 9:00 AM - 2:00 PM'
    ],
    color: 'text-purple-600'
  }
];

const inquiryTypes = [
  'General Information',
  'GEMAEXPO L2G Registration',
  'BOIN Program Inquiry',
  'Super Guides Empowerment',
  'SONI Nomination',
  'Partnership Opportunity',
  'Sponsorship',
  'Media Inquiry',
  'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would typically send to Netlify Forms or your backend
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus(error instanceof Error ? 'error' : 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 cultural-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center py-5">
            <h1 className="font-heading text-4xl lg:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Ready to join our mission? Whether you&apos;re interested in our initiatives, seeking partnership opportunities, or have questions, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="text-center card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center ${info.color}`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                <div className="space-y-1 text-gray-600">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>{detail}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours. All fields marked with * are required.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Error sending message</p>
                    <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
              {/* <form onSubmit={handleSubmit} className="space-y-6" netlify> */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry, goals, or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Leadership & Office Info */}
            <div className="space-y-8">
              {/* Leadership Card */}
              <div className="card p-8">
                <h3 className="font-heading text-2xl mb-6">Meet Our Leadership</h3>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/shared/adanma-ogumka-ekeji-profile.jpg"
                    alt="Adanma Ogumka-Ekeji"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Adanma Ogumka-Ekeji</h4>
                    <p className="text-blue-600 mb-2">Managing Director/CEO</p>
                    <p className="text-gray-600 text-sm">
                      Globally certified MSME development expert with 25+ years of experience in entrepreneurship and economic development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="card overflow-hidden">
                <Image
                  src="/images/shared/company-building-exterior.jpg"
                  alt="Joint Heirs Limited Office"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">
                    Located in the heart of Umuahia, our office is easily accessible and we welcome visitors during business hours.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/gemaexpo" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Register for GEMAEXPO L2G
                  </a>
                  <a href="/boin" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Apply for BOIN Program
                  </a>
                  <a href="/super-guides" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Join Super Guides Empowerment
                  </a>
                  <a href="/soni" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    → Nominate for SONI Awards
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in Umuahia, Abia State, Nigeria
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500">SATID Complex, Plot 51 Eze Ogbulafor, Umuahia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}