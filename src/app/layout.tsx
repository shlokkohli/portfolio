import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
  title: "Shlok Kohli | Portfolio",
  description: "I'm a full stack developer who loves creating scalable, user-friendly applications and solving complex problems with clean code.",
  keywords: ['Shlok Kohli', 'Portfolio', 'Full Stack', 'Next.js', 'Web Developer', 'MERN', 'DSA'],
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Shlok Kohli | Portfolio",
    description: "I'm a full stack developer who loves creating scalable, user-friendly applications and solving complex problems with clean code.",
    siteName: "Shlok Kohli Portfolio",
    images: [
      {
        url: `${baseURL}/openGraphLogo.png`,
        width: 1200,
        height: 630,
        alt: "Shlok Kohli Portfolio"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}