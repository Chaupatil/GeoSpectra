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
          ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Satellite className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-all group-hover:rotate-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              GeoSpectra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Features
            </Link>
            <Link
              href="#api"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              API
            </Link>
            <Link
              href="#pricing"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Docs
            </Link>
            <Link
              href="/login"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-full transition shadow-lg shadow-cyan-500/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-900/50">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#features"
              className="block text-gray-400 hover:text-cyan-400 transition"
            >
              Features
            </Link>
            <Link
              href="#api"
              className="block text-gray-400 hover:text-cyan-400 transition"
            >
              API
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-400 hover:text-cyan-400 transition"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="block text-gray-400 hover:text-cyan-400 transition"
            >
              Docs
            </Link>
            <Link
              href="/login"
              className="block text-gray-400 hover:text-cyan-400 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-center shadow-lg shadow-cyan-500/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
