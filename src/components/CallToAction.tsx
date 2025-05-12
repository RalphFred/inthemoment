"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function CallToAction() {
  return (
    <section className="px-4">
      <div className="w-full rounded-3xl bg-gradient-to-br from-gold via-purple to-gold/80 p-2 my-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#1a1023] rounded-[22px] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="flex-1 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Take Control of Your Financial Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg max-w-2xl text-white"
            >
              Let's create a plan for your success. Whether you need tax help,
              business coaching, or real estate advice, our team is here for
              you.
            </motion.p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
            <Link
              href="#book-call"
              className="inline-flex items-center gap-2 bg-gold text-white text-lg font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-[#A38C0C] transition-colors"
            >
              Get started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
