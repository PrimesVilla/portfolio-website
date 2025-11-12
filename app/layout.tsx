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

export const metadata: Metadata = {
  title: {
    default: "Primes Villa — Frontend Developer",
    template: "%s | Primes Portfolio",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Personal portfolio of Sharu — frontend developer specializing in React, Next.js and TypeScript.",
  keywords: [
    "portfolio",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "design",
    "web development",
  ],
  authors: [
    { name: "Primes", url: "https://github.com/PrimesVilla" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
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
