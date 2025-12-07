"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Satellite } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Satellite className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">GeoSpectra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="#api"
              className="text-gray-300 hover:text-white transition"
            >
              API
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-gray-300 hover:text-white transition"
            >
              Docs
            </Link>
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#features"
              className="block text-gray-300 hover:text-white"
            >
              Features
            </Link>
            <Link href="#api" className="block text-gray-300 hover:text-white">
              API
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
            <Link href="/docs" className="block text-gray-300 hover:text-white">
              Docs
            </Link>
            <Link
              href="/login"
              className="block text-gray-300 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-cyan-500 text-white px-6 py-2 rounded-full text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
