import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function BrandCarousel() {
  const brands = [
        { id: 1, logo: "/images/logo.png" },
        { id: 2, logo: "/images/logo.png" },
        { id: 3, logo: "/images/logo.png" },
        { id: 4, logo: "/images/logo.png" },
        { id: 5, logo: "/images/logo.png" },
        { id: 6, logo: "/images/logo.png" },
        { id: 7, logo: "/images/logo.png" },
        { id: 8, logo: "/images/logo.png" },
        { id: 9, logo: "/images/logo.png" },
        { id: 10, logo: "/images/logo.png" },
  ];

  return (
    <div className="">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all mx-8"
          >
            <Image
              src={brand.logo}
              alt="Brand logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
