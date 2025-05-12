"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function HomeAbout() {
  return (
    <section className="wrapper flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 py-12" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <Image 
          src="/images/img2.jpg" 
          alt="About" 
          width={500} 
          height={500}
          className=""
        />
      </motion.div>
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-bold text-purple"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          At In The Moment Financial Services, we empower individuals and small businesses—especially those in underserved communities—through expert tax preparation, bookkeeping, business coaching, and real estate consulting. Our mission is to make financial literacy accessible and actionable, helping you build wealth, stay compliant, and take confident steps toward your financial goals.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full hover:bg-[#A38C0C] transition-colors cursor-pointer"
        >
          Learn more <ArrowUpRight />
        </motion.button>
      </div>
    </section>
  );
}
