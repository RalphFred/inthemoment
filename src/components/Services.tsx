"use client";
import { ArrowUpRight, Calculator, BookOpen, Building2, Home, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
const services = [
    {
      title: "Tax Preparation",
      description: "Professional tax preparation for individuals and small businesses, ensuring accuracy, compliance, and maximum deductions.",
      icon: Calculator
    },
    {
      title: "Bookkeeping & QuickBooks Training",
      description: "Monthly bookkeeping services and hands-on QuickBooks training tailored to help you manage and understand your business finances.",
      icon: BookOpen
    },
    {
      title: "Business Coaching & LLC Formation",
      description: "Step-by-step guidance to help you form your LLC, structure your business properly, and create a plan for sustainable growth.",
      icon: Building2
    },
    {
      title: "Real Estate Coaching",
      description: "Personalized coaching to help you launch or grow a profitable rental property portfolio using proven strategies.",
      icon: Home
    },
    {
      title: "Financial Literacy Workshops",
      description: "Educational sessions designed to teach individuals and business owners the fundamentals of money management, taxes, and financial planning.",
      icon: GraduationCap
    }
  ];
  

export default function Services() {
  return (
    <section className="wrapper py-12" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-purple mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive financial solutions tailored to help you achieve your personal and business goals
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(33.333%-1.5rem)]"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <service.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-purple mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="flex items-center gap-2 text-gold hover:text-[#A38C0C] transition-colors mx-auto">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}