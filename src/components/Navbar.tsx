"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="wrapper py-4 flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className=""
          priority
        />

        <div className="hidden md:flex items-center gap-16">
          <Link
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-[#BA9D0D] text-white px-6 py-2 rounded-full hover:bg-[#A38C0C] transition-colors">
          Book a call
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center px-6 py-6 min-h-[90px] w-full">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className=""
            />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <nav className="flex flex-col items-center gap-8">
              <Link
                href="#about"
                className="text-2xl font-medium text-gray-900 hover:text-gold transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-2xl font-medium text-gray-900 hover:text-gold transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-2xl font-medium text-gray-900 hover:text-gold transition-colors"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-12">
              <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-[#A38C0C] transition-colors text-lg font-medium">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
