import Image from "next/image";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HomeContact from "@/components/HomeContact";
export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarousel />
      <HomeAbout />
      <Services />
      <Testimonials />
      <CallToAction />
      <HomeContact />
      <Footer />
    </main>
  );
}
