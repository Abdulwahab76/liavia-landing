import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Layouts/Header";
import GlobalDotCanvas from "./Components/DotsCanvas";
import Footer from "./Components/Layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome | LiaVia",
  description:
    "LiaVia is a global group of companies that enables seamless trade and logistics across the world. With a rich history dating back to 1977, we have evolved from our roots in agricultural commodity brokerage to become a diverse group of businesses. Our core mission is to connect the dots in global trade, providing market insights, integrated logistics, processing, and hands-on support to our clients and partners. We are committed to fostering growth and innovation while maintaining our dedication to excellence and customer satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        <Header />
        <GlobalDotCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
