import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://jointheir.netlify.app'),
  title: {
    default: "Joint Heirs Limited - Investing in Your Future",
    template: "%s | Joint Heirs Limited"
  },
  description: "Delivering qualitative, timely, and value-based services to realize clients' goals through target-oriented professionals and innovative technology. 72,000+ jobs created since 1992.",
  keywords: ["Joint Heirs Limited", "Nigeria", "Youth Development", "Women Empowerment", "GEMAEXPO", "BOIN", "MSME", "Agribusiness"],
  authors: [{ name: "Joint Heirs Limited" }],
  creator: "Joint Heirs Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://jointheirslimited.com",
    siteName: "Joint Heirs Limited",
    title: "Joint Heirs Limited - Investing in Your Future",
    description: "Empowering Nigerian youth and women through innovative programs. 72,000+ jobs created, 36 states coverage, 33+ years experience.",
    images: [
      {
        url: "/images/shared/joint-heirs-social-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Joint Heirs Limited - Investing in Your Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint Heirs Limited - Investing in Your Future",
    description: "Empowering Nigerian youth and women through innovative programs.",
    images: ["/images/shared/joint-heirs-social-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}