"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const CoreValues = () => {
  const coreValues: CoreValue[] = [
    {
      id: 1,
      title: "Care",
      description:
        "Building an attitude of care towards the self and the community.",
      icon: "/home/care.png",
    },
    {
      id: 2,
      title: "Courage",
      description:
        "Enabling youth to develop the courage to question the status quo.",
      icon: "/home/courage.svg",
    },
    {
      id: 3,
      title: "Creativity",
      description:
        "Providing a creative environment that engenders a growth mindset.",
      icon: "/home/creativity.svg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#5829C7] to-[#5829C7]/40 py-16 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-center text-white text-4xl font-primary font-medium mb-12">
        Our Core Values
      </h2>

      {/* Core Value Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {coreValues.map((value) => (
          <motion.div
            key={value.id}
            className="flex flex-col items-center text-center bg-gradient-to-br from-[#764fd0] to-[#794cf0] 
              rounded-2xl w-[90%] max-w-[310px] p-6 md:p-8 min-h-[250px]
              border border-white border-opacity-50 backdrop-blur-md transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: value.id * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] mb-4 md:mb-6">
              <Image
                src={value.icon}
                alt={`${value.title} icon`}
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-[20px] md:text-[24px] font-primary font-medium">
              {value.title}
            </h3>

            {/* Description with clamp text size & max lines */}
            <p
              className="text-white font-secondary font-semibold 
                text-[clamp(10px,2vw,14px)] leading-snug mt-2
                w-[256px] h-[34px] max-h-[calc(2*1.6em)] 
                overflow-hidden whitespace-normal"
            >
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
