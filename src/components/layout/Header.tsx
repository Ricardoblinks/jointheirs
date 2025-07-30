'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
	{ name: 'Home', href: '/' },
	{
		name: 'Initiatives',
		href: '#',
		dropdown: [
			{ name: 'GEMAEXPO L2G', href: '/gemaexpo', description: 'Global Export & Market Access Expo' },
			{ name: 'Beyond Oil Initiative (BOIN)', href: '/boin', description: 'Agribusiness & Economic Diversification' },
			{ name: 'Super Guides Empowerment', href: '/super-guides', description: 'Women & Youth Empowerment' },
			{ name: 'SONI', href: '/soni', description: 'Showcase Outstanding Nigerian Initiatives' },
		],
	},
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Apply Poppins font globally to header
  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };

  return (
	<header className="bg-white shadow-sm sticky top-0 z-50" style={poppinsFont}>
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex lg:flex-1">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Joint Heirs Limited</span>
							<Image
								className="h-10 w-auto"
								src="/images/shared/jointheirslogo.png"
								alt="Joint Heirs Limited"
								width={120}
								height={40}
								priority
							/>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Menu className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>

					{/* Desktop navigation */}
					<div className="hidden lg:flex lg:gap-x-8">
			{navigation.map((item) => (
			  <div key={item.name} className="relative">
				{item.dropdown ? (
				  <div className="relative">
					<button
					  type="button"
					  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
					  onClick={() => setDropdownOpen(!dropdownOpen)}
					//   onClick={() => setDropdownOpen((open) => !open)}
					  aria-expanded={dropdownOpen}
					>
					  {item.name}
					  <ChevronDown className="h-4 w-4" aria-hidden="true" />
					</button>

					{dropdownOpen && (
					  <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
						<div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
						  {item.dropdown.map((dropdownItem) => (
							<Link
							  key={dropdownItem.name}
							  href={dropdownItem.href}
							  onClick={() =>setDropdownOpen(!dropdownOpen)}
							  className="block rounded-lg p-4 hover:bg-gray-50"
							>
							  <div className="font-semibold text-gray-900">
								{dropdownItem.name}
							  </div>
							  <div className="text-gray-600 text-xs mt-1">
								{dropdownItem.description}
							  </div>
							</Link>
						  ))}
						</div>
					  </div>
					)}
				  </div>
				) : (
				  <Link
					href={item.href}
					className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
				  >
					{item.name}
				  </Link>
				)}
			  </div>
			))}
					</div>

					{/* CTA Button */}
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link href="/contact" className="btn-primary text-sm font-semibold">
							Get Involved
						</Link>
					</div>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden">
						<div className="fixed inset-0 z-50" />
						<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<Link href="/" className="-m-1.5 p-1.5">
									<span className="sr-only">Joint Heirs Limited</span>
									<Image
										className="h-8 w-auto"
										src="/images/shared/jointheirslogo.png"
										alt="Joint Heirs Limited"
										width={100}
										height={32}
									/>
								</Link>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<X className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<div key={item.name}>
												{item.dropdown ? (
													<div>
														<div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
															{item.name}
														</div>
														<div className="ml-4 space-y-2">
															{item.dropdown.map((dropdownItem) => (
																<Link
																	key={dropdownItem.name}
																	href={dropdownItem.href}
																	className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-gray-600 hover:bg-gray-50"
																	onClick={() => setMobileMenuOpen(false)}
																>
																	{dropdownItem.name}
																</Link>
															))}
														</div>
													</div>
												) : (
													<Link
														href={item.href}
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
														onClick={() => setMobileMenuOpen(false)}
													>
														{item.name}
													</Link>
												)}
											</div>
										))}
									</div>
									<div className="py-6">
										<Link
											href="/contact"
											className="btn-primary -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-center"
											onClick={() => setMobileMenuOpen(false)}
										>
											Get Involved
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
