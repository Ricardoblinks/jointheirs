'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, Briefcase, Award, Target, Play, Pause, ChevronLeft, ChevronRight, ExternalLink, Calendar, Clock, Star } from 'lucide-react';

const stats = [
	{ icon: Briefcase, label: 'Jobs Created', value: '72,000+', color: 'text-emerald-600', description: 'Direct employment opportunities' },
	{ icon: Award, label: 'Years of Experience', value: '33+', color: 'text-blue-600', description: 'Since 1992' },
	{ icon: MapPin, label: 'States Coverage', value: '36', color: 'text-orange-600', description: 'Nationwide reach' },
	{ icon: Users, label: 'Lives Impacted', value: '5M+', color: 'text-purple-600', description: 'Beneficiaries globally' },
	{ icon: Target, label: 'Team Members', value: '97+', color: 'text-red-600', description: 'Dedicated professionals' },
];

const initiatives = [
	{
		title: 'GEMAEXPO L2G',
		subtitle: 'Global Export & Market Access Expo',
		description: 'Annual expo connecting local entrepreneurs to global markets with comprehensive training and networking.',
		image: '/images/initiatives/gemaexpo/gemaexpo-hero-banner.jpg',
		href: '/gemaexpo',
		color: 'from-blue-500 to-blue-700',
		tag: 'Trade & Export',
		impact: '10,000+ participants annually'
	},
	{
		title: 'Beyond Oil Initiative (BOIN)',
		subtitle: 'Economic Diversification Program',
		description: 'Discovering viable indigenous products and creating sustainable agribusiness value chains nationwide.',
		image: '/images/initiatives/boin/boin-hero-agriculture.png',
		href: '/boin',
		color: 'from-emerald-500 to-emerald-700',
		tag: 'Agriculture',
		impact: '72,000+ jobs created'
	},
	{
		title: 'Super Guides Empowerment',
		subtitle: 'Women & Youth Development',
		description: 'Comprehensive skills training, mentorship, and financial inclusion programs for sustainable livelihoods.',
		image: '/images/initiatives/super-guides/womenandyouth.jpg',
		href: '/super-guides',
		color: 'from-purple-500 to-purple-700',
		tag: 'Empowerment',
		impact: '50,000+ women & youth trained'
	},
	{
		title: 'SONI',
		subtitle: 'Showcase Outstanding Nigerian Initiatives',
		description: 'Highlighting innovative grassroots projects driving positive community transformation across Nigeria.',
		image: '/images/initiatives/soni/soni-hero-innovation.jpeg',
		href: '/soni',
		color: 'from-orange-500 to-orange-700',
		tag: 'Innovation',
		impact: '500+ initiatives showcased'
	},
];

const testimonials = [
	{
		name: "Chioma Okafor",
		role: "GEMAEXPO Participant, Lagos",
		content: "Through GEMAEXPO, my small craft business now exports to 5 countries. The training and connections changed everything.",
		rating: 5
	},
	{
		name: "Ibrahim Musa",
		role: "BOIN Beneficiary, Kano",
		content: "The agricultural value chain program helped me scale from 2 hectares to 50 hectares. I now employ 12 people.",
		rating: 5
	},
	{
		name: "Grace Adeolu",
		role: "Super Guides Graduate, Abuja",
		content: "The mentorship and skills training gave me confidence to start my tech company. We're now a team of 8.",
		rating: 5
	}
];

const partners = [
	{ name: 'Alex Ekwueme Federal University', logo: '/images/partners/alexekwueme.png' },
	{ name: 'Federal Ministry of Agriculture', logo: '/images/partners/fmard.jpeg' },
	{ name: 'Michael Okpara University', logo: '/images/partners/michaelokpara.jpeg' },
	{ name: 'Vital Voices Global Partnership', logo: '/images/partners/vvglobal.png' },
	{ name: 'US Embassy Nigeria', logo: '/images/partners/usembassy.png' },
	{ name: 'Central Bank of Nigeria', logo: '/images/partners/cbn-logo.png' },
];

const heroImages = [
	'/images/shared/Extras/1.jpg',
	'/images/shared/Extras/2.jpg',
	'/images/shared/Extras/4.jpg',
	'/images/shared/Extras/6.jpg',
	'/images/shared/Extras/3.jpg',
	'/images/shared/Extras/10.jpg',
	'/images/shared/Extras/8.jpg',
	
];

export default function HomePage() {
	const [currentHeroImage, setCurrentHeroImage] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [visibleStats, setVisibleStats] = useState<number[]>([]);
	const [mounted, setMounted] = useState(false);

	// Ensure component is mounted before running effects
	useEffect(() => {
		setMounted(true);
	}, []);

	// Auto-rotate hero images
	useEffect(() => {
		if (!mounted || !isPlaying) return;
		const interval = setInterval(() => {
			setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [isPlaying, mounted]);

	// Auto-rotate testimonials
	useEffect(() => {
		if (!mounted) return;
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [mounted]);

	// Animate stats on scroll (simplified version)
	useEffect(() => {
		if (!mounted) return;
		const timer = setTimeout(() => {
			setVisibleStats(stats.map((_, index) => index));
		}, 500);
		return () => clearTimeout(timer);
	}, [mounted]);

	const nextHeroImage = () => {
		setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
	};

	const prevHeroImage = () => {
		setCurrentHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
	};

	if (!mounted) {
		return null; // Prevent hydration mismatch
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white overflow-hidden min-h-screen flex items-center py-10">
				{/* Animated background pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0" style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}} />
				</div>
				
				<div className="container mx-auto px-4 py-20 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8 py-2">
							{/* <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
								<Calendar className="w-4 h-4 text-emerald-400" />
								<span>Established 1992 • 33+ Years of Impact</span>
							</div> */}
							
							<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
								Investing in Your
								<span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
									Future
								</span>
							</h1>
							
							<p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
								Delivering world-class services that transform lives through innovation, partnership, and sustainable development across Nigeria.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/#ongoing" className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center">
									Ongoing Registration
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
								<button className="group border-2 border-white/30 hover:border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center">
									Watch Our Story
									<Play className="ml-2 h-5 w-5" />
								</button>
							</div>
						</div>
						
						<div className="relative">
							{/* Image carousel */}
							<div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
								{heroImages.map((image, index) => (
									<Image
										key={index}
										src={image}
										alt={`Hero ${index + 1}`}
										fill
										className={`object-cover transition-all duration-1000 ${
											index === currentHeroImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
										}`}
										priority={index === 0}
									/>
								))}
								
								{/* Carousel controls */}
								<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
									{heroImages.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentHeroImage(index)}
											className={`w-3 h-3 rounded-full transition-all duration-300 ${
												index === currentHeroImage ? 'bg-white' : 'bg-white/50'
											}`}
										/>
									))}
								</div>
								
								<button
									onClick={prevHeroImage}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								
								<button
									onClick={nextHeroImage}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300"
								>
									<ChevronRight className="w-6 h-6" />
								</button>
								
								<button
									onClick={() => setIsPlaying(!isPlaying)}
									className="absolute top-4 right-4 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300"
								>
									{isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-gradient-to-r from-slate-50 to-emerald-50 relative overflow-hidden">
				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Impact Since 1992</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
							Over three decades of transforming lives and communities across Nigeria through innovative programs and strategic partnerships.
						</p>
					</div>
					
					<div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
						{stats.map((stat, index) => (
							<div
								key={stat.label}
								className={`group text-center transition-all duration-700 hover:scale-110 ${
									visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								<div className="relative">
									<div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 ${stat.color} relative overflow-hidden`}>
										<stat.icon className="h-10 w-10 z-10 relative" />
										<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-black/10 transition-all duration-300"></div>
									</div>
								</div>
								<div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tabular-nums">
									{stat.value}
								</div>
								<div className="text-slate-600 font-semibold text-lg mb-1">
									{stat.label}
								</div>
								<div className="text-sm text-slate-500">
									{stat.description}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ongoing Registration CTA */}
			<section id='ongoing' className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 relative overflow-hidden">
				<div className="absolute inset-0 bg-black/10"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
						<div className="flex flex-col lg:flex-row items-center gap-8">
							<div className="flex-1 text-center lg:text-left">
								<div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
									<Clock className="w-4 h-4" />
									<span>Registration Now Open</span>
								</div>
								
								<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
									GEMAEXPO L2G 2025
								</h2>
								<p className="text-lg text-slate-600 mb-6 leading-relaxed">
									Join Africa's premier export expo. Connect with global buyers, showcase your products, and access comprehensive training programs designed to scale your business internationally.
								</p>
								
								<div className="flex flex-wrap gap-4 mb-6">
									<div className="flex items-center space-x-2 text-slate-700">
										<Users className="w-5 h-5 text-blue-600" />
										<span>10,000+ Expected Participants</span>
									</div>
									<div className="flex items-center space-x-2 text-slate-700">
										<MapPin className="w-5 h-5 text-emerald-600" />
										<span>50+ Countries</span>
									</div>
								</div>
							</div>
							
							<div className="flex-shrink-0">
								<Link href="/register" className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center">
									Register Now
									<ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Initiatives Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Key Initiatives</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
							Four strategic programs designed to empower Nigerian youth, women, and entrepreneurs while promoting economic diversification and innovation.
						</p>
					</div>
					
					<div className="grid md:grid-cols-2 gap-8">
						{initiatives.map((initiative, index) => (
							<Link
								key={initiative.title}
								href={initiative.href}
								className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={initiative.image}
										alt={initiative.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${initiative.color}`}>
										{initiative.tag}
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
								</div>
								
								<div className="p-8">
									<h3 className="text-2xl font-bold text-slate-900 mb-2">{initiative.title}</h3>
									<h4 className="text-lg text-slate-600 mb-4">{initiative.subtitle}</h4>
									<p className="text-slate-600 mb-6 leading-relaxed">{initiative.description}</p>
									
									<div className="flex items-center justify-between">
										<div className="text-sm text-slate-500">
											<strong className="text-slate-700">{initiative.impact}</strong>
										</div>
										<div className="group flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300">
											Learn More
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Success Stories</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Real impact from real people across our programs
						</p>
					</div>
					
					<div className="max-w-4xl mx-auto">
						<div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
							<div className="text-center">
								<div className="flex justify-center mb-4">
									{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
								</div>
								
								<blockquote className="text-xl lg:text-2xl text-slate-700 mb-8 leading-relaxed italic">
									"{testimonials[currentTestimonial].content}"
								</blockquote>
								
								<div className="flex items-center justify-center space-x-4">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
										{testimonials[currentTestimonial].name.charAt(0)}
									</div>
									<div className="text-left">
										<div className="font-semibold text-slate-900 text-lg">
											{testimonials[currentTestimonial].name}
										</div>
										<div className="text-slate-600">
											{testimonials[currentTestimonial].role}
										</div>
									</div>
								</div>
							</div>
							
							<div className="flex justify-center mt-8 space-x-2">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentTestimonial(index)}
										className={`w-3 h-3 rounded-full transition-all duration-300 ${
											index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Leadership Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div>
								<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Visionary Leadership</h2>
								<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-8"></div>
							</div>
							
							<div>
								<h3 className="text-3xl font-bold text-slate-900 mb-2">Adanma Ogumka-Ekeji</h3>
								<p className="text-xl text-blue-600 font-semibold mb-6">Managing Director/CEO</p>
								
								<div className="space-y-6 text-slate-700 leading-relaxed">
									<p className="text-lg">
										Globally certified MSME development expert and market access specialist with over <strong>25 years</strong> of transformative experience in entrepreneurship and economic development.
									</p>
									<p className="text-lg">
										Leading architect of <strong>Beyond Oil Initiative Nigeria (BOIN)</strong> and <strong>Showcase Nigeria Initiative</strong>, driving economic diversification and youth empowerment across all 36 states of Nigeria.
									</p>
								</div>
								
								<Link href="/about" className="mt-8 group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center">
									Meet Our Team
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>
						
						<div className="relative">
							<div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src="/images/shared/ceo.jpg"
									alt="Adanma Ogumka-Ekeji"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
							</div>
							
							{/* Floating achievement cards */}
							<div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
								<div className="text-center">
									<div className="text-2xl font-bold text-emerald-600">25+</div>
									<div className="text-sm text-slate-600">Years Experience</div>
								</div>
							</div>
							
							<div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
								<div className="text-center">
									<div className="text-2xl font-bold text-blue-600">5M+</div>
									<div className="text-sm text-slate-600">Lives Impacted</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Partners Section */}
			<section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Strategic Partners</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Collaborating with leading institutions to maximize our collective impact across Nigeria and beyond
						</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
						{partners.map((partner, index) => (
							<div 
								key={partner.name} 
								className="group text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
							>
								<Image
									src={partner.logo}
									alt={partner.name}
									width={120}
									height={80}
									className="mx-auto object-contain filter grayscale-0 group-hover:grayscale-0 transition-all duration-300"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
				<div className="container mx-auto px-4 text-center relative z-10">
					<h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Transform Nigeria Together?</h2>
					<p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed">
						Whether you're an entrepreneur, youth, woman, or organization, there's a place for you in our mission to build a prosperous, diversified Nigerian economy.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
						<Link href="/contact" className="group flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center">
							Join Our Mission
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link href="/about" className="group flex-1 border-2 border-white/30 hover:border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center">
							Learn More
							<ExternalLink className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}