"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Kristen Kennard",
    title: "",
    text: "My husband and I had an incredible experience with Jarde' and her team. We were communicated with consistently and all our questions were answered quickly. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    name: "Asya Richardson",
    title: "",
    text: "Jarde truly understands the unique needs of small businesses. She does a stellar job with tax prep and empowers you to manage your books. Highly recommend In the Moment!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    name: "Mionna",
    title: "",
    text: "Always great, easy, speedy service! Very professional and makes me feel heard. I recommend!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  },
  {
    name: "Mr. Mont",
    title: "",
    text: "Our experience with Jarde' as our tax preparer was exceptional. She was informative, thorough, and made tax season stress-free. Highly recommend her services!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5
  },
  {
    name: "RollinsCafe LLC",
    title: "",
    text: "Jarde and the team provide excellent customer service with my taxes every year. We truly appreciate their professionalism and care.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    name: "Inez Chimhangariso",
    title: "",
    text: "Jarde' and team were on point. Personable, professional, and prompt. I will definitely use them again!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white w-full overflow-x-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-purple mb-4"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          What our clients say about us: real stories of trust, professionalism, and outstanding financial service.
        </motion.p>
      </div>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.7 },
            1536: { slidesPerView: 3 },
          }}
          centeredSlides={true}
          spaceBetween={32}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          className="!overflow-visible w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gold/30 rounded-2xl shadow-md px-6 py-8 h-full flex flex-col justify-between min-h-[320px] w-full max-w-xl mx-auto relative">
                <div className='mb-6'>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-purple text-base mb-4 font-semibold">
                    {t.text.split('!')[0]}!
                    <br />{t.text.split('!').slice(1).join('!')}
                  </p>
                  <Quote className="absolute top-6 right-6 text-gold/30 w-8 h-8" />
                </div>
                <div className="flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full object-cover border-2 border-gold" />
                  <div>
                    <div className="font-semibold text-purple text-sm">{t.name}</div>
                    {t.title && <div className="text-xs text-gold">{t.title}</div>}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="testimonial-prev w-10 h-10 rounded-full border border-gold bg-white flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="testimonial-next w-10 h-10 rounded-full border border-gold bg-white flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
