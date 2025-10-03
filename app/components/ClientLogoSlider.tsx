"use client";


import Image from "next/image";

import "swiper/css";

const ClientLogoSlider = () => {
  const logos = [
    { src: "/client/matrimandir.svg", alt: "Client 1" },
    { src: "/client/maatram.svg", alt: "Client 2" },
    { src: "/client/ageshift.svg", alt: "Client 3" },
    { src: "/client/solitude-farm.svg", alt: "Client 4" },
    { src: "/client/tvam.svg", alt: "Client 5" },
    { src: "/client/bevolve.svg", alt: "Client 6" },
    { src: "/client/av-marathon.svg", alt: "Client 7" },
    { src: "/client/general-aeronautics.svg", alt: "Client 8" },
    { src: "/client/kittykat.svg", alt: "Client 9" },
    { src: "/client/prakriti.svg", alt: "Client 10" },
    { src: "/client/rangSutra.svg", alt: "Client 11" },
    { src: "/client/sharadha-yoga.svg", alt: "Client 12" },
    { src: "/client/cat.svg", alt: "Client 13" },
    { src: "/client/indic-ai.svg", alt: "Client 14" },
    { src: "/client/quilt-ai.svg", alt: "Client 15" },
    { src: "/client/startup-o.svg", alt: "Client 16" },
  ];

  return (
    <section className="w-full bg-white py-12 overflow-hidden border-b-2 border-[#5829C7]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        <span className="text-violet-500">Clients</span> We’re Proud to Work
        With
      </h2>

      <div className="relative flex overflow-hidden">
        {/* Track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center mx-8 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={160}
                className="object-contain  transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
