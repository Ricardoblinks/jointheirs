import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, Briefcase, Award, Target } from 'lucide-react';

const stats = [
	{ icon: Briefcase, label: 'Jobs Created', value: '72,000+', color: 'text-blue-600' },
	{ icon: Award, label: 'Years of Experience', value: '33+', color: 'text-green-600' },
	{ icon: MapPin, label: 'States Coverage', value: '36', color: 'text-orange-600' },
	{ icon: Users, label: 'Trusted Global Impacted', value: '5M+', color: 'text-purple-600' },
	{ icon: Target, label: 'Team Members', value: '97+', color: 'text-red-600' },
];

const initiatives = [
	{
		title: 'GEMAEXPO L2G',
		subtitle: 'Global Export & Market Access Expo',
		description: 'Bridging the gap between local entrepreneurs and global markets through annual expo and training programs.',
		image: '/images/initiatives/gemaexpo/gemaexpo-hero-banner.jpg',
		href: '/gemaexpo',
		color: 'bg-blue-600',
	},
	{
		title: 'Beyond Oil Initiative (BOIN)',
		subtitle: 'Economic Diversification Program',
		description: 'Discovering unique viable indigenous products and creating 72,000+ agribusiness value chain jobs.',
		image: '/images/initiatives/boin/boin-hero-agriculture.png',
		href: '/boin',
		color: 'bg-green-600',
	},
	{
		title: 'Super Guides Empowerment',
		subtitle: 'Women & Youth Development',
		description: 'Equipping women and youth with skills, tools, and mentorship for economic self-reliance.',
		image: '/images/initiatives/super-guides/women-empowerment-hero.jpg',
		href: '/super-guides',
		color: 'bg-purple-600',
	},
	{
		title: 'SONI',
		subtitle: 'Showcase Outstanding Nigerian Initiatives',
		description: 'Highlighting grassroots initiatives making positive impact across Nigeria through innovation and community development.',
		image: '/images/initiatives/soni/soni-hero-innovation.jpeg',
		href: '/soni',
		color: 'bg-orange-600',
	},
];

const partners = [
	{ name: 'Alex Ekwueme Federal University', logo: '/images/partners/alexekwueme.png' },
	{ name: 'Federal Ministry of Agriculture', logo: '/images/partners/fmard.jpeg' },
	{ name: 'Michael Okpara University', logo: '/images/partners/michaelokpara.jpeg' },
	{ name: 'Vital Voices Global Partnership', logo: '/images/partners/vvglobal.png' },
	{ name: 'US Embassy Nigeria', logo: '/images/partners/usembassy.png' },
	{ name: 'Central Bank of Nigeria', logo: '/images/partners/cbn-logo.png' },
];

export default function HomePage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
				<div className="absolute inset-0 cultural-pattern opacity-10"></div>
				<div className="relative container mx-auto px-4 py-20 lg:py-32">
					<div className="grid lg:grid-cols-2 gap-12 items-center py-5">
						<div className="animate-fade-in">
							<h1 className="font-heading text-4xl lg:text-6xl mb-6">
								Investing in Your
								<span className="text-gradient block">Future</span>
							</h1>
							<p className="text-xl lg:text-2xl mb-8 text-blue-100">
								Delivering qualitative, timely, and value-based services to realize clients&apos; goals through target-oriented professionals and innovative technology.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/about" className="btn-primary text-lg px-8 py-4">
									Learn More
									<ArrowRight className="ml-2 h-5 w-5 inline" />
								</Link>
								{/* <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
									Get In Touch
								</Link> */}
							</div>
						</div>
						<div className="animate-slide-up">
							<Image
								src="/images/shared/landingpage-top.jpg"
								// src="/images/shared/adanma-ogumka-ekeji-profile.jpg"
								alt=""
								width={600}
								height={1800}
								className="rounded-2xl shadow-2xl"
								priority
								// onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="font-heading text-3xl lg:text-4xl mb-4">Our Impact Since 1992</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Over three decades of transforming lives and communities across Nigeria through innovative programs and strategic partnerships.
						</p>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
						{stats.map((stat, index) => (
							<div
								key={stat.label}
								className="text-center animate-scale-in"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center ${stat.color}`}>
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

			{/* Mission & Vision */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<Image
								src="/images/shared/placeholder.jpg"
								alt=""
								width={600}
								height={400}
								className="rounded-2xl shadow-lg"
								// onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
							/>
						</div>
						<div>
							<h2 className="font-heading text-3xl lg:text-4xl mb-8">Our Mission & Vision</h2>
							<div className="space-y-6">
								<div className="p-6 bg-blue-50 rounded-xl">
									<h3 className="font-semibold text-xl mb-3 text-blue-900">Mission</h3>
									<p className="text-gray-700">
										To deliver qualitative, timely, and value-based services; realize clients&apos; goals and aspirations through the use of target-oriented professionals and innovative technology.
									</p>
								</div>
								<div className="p-6 bg-green-50 rounded-xl">
									<h3 className="font-semibold text-xl mb-3 text-green-900">Vision</h3>
									<p className="text-gray-700">
										To be a leading Nigerian company providing world-class services across sectors through innovation, partnership, and sustainable development.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Initiatives Preview */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="font-heading text-3xl lg:text-4xl mb-4">Our Key Initiatives</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Four strategic programs designed to empower Nigerian youth, women, and entrepreneurs while promoting economic diversification and innovation.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{initiatives.map((initiative, index) => (
							<Link
								key={initiative.title}
								href={initiative.href}
								className="group card overflow-hidden animate-fade-in"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<div className="relative h-64">
									<Image
										src={initiative.image}
										alt=''
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
										// onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
									/>
									<div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${initiative.color}`}>
										{initiative.title}
									</div>
								</div>
								<div className="p-6">
									<h3 className="font-heading text-xl mb-2">{initiative.subtitle}</h3>
									<p className="text-gray-600 mb-4">{initiative.description}</p>
									<div className="flex items-center text-blue-600 font-medium">
										Learn More
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Leadership Highlight */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-heading text-3xl lg:text-4xl mb-6">Leadership</h2>
							<h3 className="text-2xl font-semibold mb-4 text-blue-900">Adanma Ogumka-Ekeji</h3>
							<p className="text-lg text-gray-600 mb-6">Managing Director/CEO</p>
							<div className="space-y-4 text-gray-700">
								<p>
									Globally certified MSME development expert and market access specialist with over 25 years of experience in entrepreneurship and economic development.
								</p>
								<p>
									Key roles in <strong>Beyond Oil Initiative Nigeria (BOIN)</strong> and <strong>Showcase Nigeria Initiative</strong>, driving economic diversification and youth empowerment across Nigeria.
								</p>
							</div>
							<Link href="/about" className="btn-primary mt-6">
								Meet Our Team
							</Link>
						</div>
						<div>
							<Image
								src="/images/shared/placeholder.jpg"
								alt=""
								width={600}
								height={400}
								className="rounded-2xl shadow-lg"
								// onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Partners Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="font-heading text-3xl lg:text-4xl mb-4">Strategic Partners</h2>
						<p className="text-xl text-gray-600">
							Collaborating with leading institutions to maximize impact
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
						{partners.map((partner) => (
							<div key={partner.name} className="text-center">
								<Image
									src={partner.logo}
									alt=''
									width={120}
									height={80}
									className="mx-auto grayscale-0 hover:bg-grayscale-0 transition-all duration-300"
									// onError={(e) => { e.currentTarget.src = '/images/shared/placeholder.jpg'; }}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Registration Session */}
				<section className="py-10 md:py-16 bg-gradient-to-r from-blue-50 to-green-50">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl shadow-lg bg-white p-8 md:p-12">
					<div className="flex-1">
						<h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-3 text-blue-900">
						Ongoing Registration: GEMAEXPO L2G 2025
						</h2>
						<p className="text-gray-700 text-lg mb-4">
						Register now for the Global Export & Market Access Expo. Showcase your products, connect with buyers, and access training. Upload your product catalogue images to be featured!
						</p>
						<div className="flex items-center gap-2 mb-4">
						<span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
							Registration Deadline:
						</span>
						<span className="font-bold text-blue-900 text-base">
							to be announced.
						</span>
						</div>
					</div>
					<div className="flex-shrink-0">
						<Link
						href="/register"
						className="btn-primary text-lg px-8 py-4 rounded-xl shadow-md transition hover:bg-blue-700"
						>
						Register for GEMAEXPO
						</Link>
					</div>
					</div>
				</div>
				</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-heading text-3xl lg:text-4xl mb-6">Ready to Join Our Mission?</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Whether you&apos;re an entrepreneur, youth, woman, or organization, there&apos;s a place for you in our initiatives. Let&apos;s build Nigeria&apos;s future together.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-secondary text-lg px-8 py-4">
							Get Started Today
						</Link>
						<Link href="/about" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
							Learn More About Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}