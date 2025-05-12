"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="wrapper flex flex-col lg:flex-row justify-between items-center gap-12 py-12 min-h-[calc(100vh-78px)]">
      <div className="w-full lg:w-1/2 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-purple"
        >
          A <span className="text-gold">Moment</span> with us changes your{" "}
          <span className="text-gold">Financial</span> Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We are a team of experienced financial advisors who are dedicated to
          helping you achieve your financial goals.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full hover:bg-[#A38C0C] transition-colors cursor-pointer"
        >
          Book a free call <ArrowUpRight />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <Image
          src="/images/hero.jpeg"
          alt="image of Jarde Allen"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
}
