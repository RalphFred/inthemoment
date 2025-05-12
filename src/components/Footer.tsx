import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1023] text-white">
      <div className="wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/logo.png"
              alt="In The Moment Financial Services"
              width={150}
              height={150}
              className="brightness-0 invert"
            />
            <p className="text-gray-300">
              Empowering individuals and businesses with expert financial guidance and solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#tax" className="text-gray-300 hover:text-gold transition-colors">
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link href="#bookkeeping" className="text-gray-300 hover:text-gold transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="#business" className="text-gray-300 hover:text-gold transition-colors">
                  Business Coaching
                </Link>
              </li>
              <li>
                <Link href="#real-estate" className="text-gray-300 hover:text-gold transition-colors">
                  Real Estate Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <span className="text-gray-300">
                  123 Financial Street<br />
                  Suite 100<br />
                  Atlanta, GA 30303
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:info@inthemoment.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@inthemoment.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} In The Moment Financial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
