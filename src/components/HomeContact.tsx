"use client";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function HomeContact() {
  return (
    <section className="wrapper py-16" id="contact">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-purple mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Ready to take the next step? We're here to help you achieve your financial goals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Socials */}
        <div className="h-full flex flex-col justify-between">
          <div className="bg-[#1a1023] text-white p-8 rounded-2xl flex flex-col h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-300">
                      123 Financial Street, Suite 100, Atlanta, GA 30303
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@inthemoment.com" className="text-gray-300 hover:text-gold transition-colors">
                      info@inthemoment.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Our Socials</h3>
              <a
                href="https://www.instagram.com/itmfinancialservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gold" />
                <span className="font-medium">@itmfinancialservices</span>
              </a>
              <a
                href="https://www.facebook.com/ITMFinancialServices"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-gold" />
                <span className="font-medium">In The Moment Financial Services</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jarde-allen-57287665/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gold" />
                <span className="font-medium">IN THE MOMENT FINANCIAL SERVICES</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                required
              >
                <option value="">Select a service</option>
                <option value="tax">Tax Preparation</option>
                <option value="bookkeeping">Bookkeeping & QuickBooks Training</option>
                <option value="business">Business Coaching & LLC Formation</option>
                <option value="real-estate">Real Estate Coaching</option>
                <option value="workshops">Financial Literacy Workshops</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white px-6 py-3 rounded-full hover:bg-[#A38C0C] transition-colors flex items-center justify-center gap-2"
            >
              Send Message <ArrowUpRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
