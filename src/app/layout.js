"use client";

import localFont from "next/font/local";
import { useState, useEffect } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setPageHeight(document.body.scrollHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial page height

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans text-gray-800 relative">
        <div
          className="fixed inset-0 bg-gradient-to-br from-blue-100 to-pink-100"
          style={{
            height: `${pageHeight}px`,
            transform: `translateY(${-scrollY * 0.3}px)`,
          }}
        />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
