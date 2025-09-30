"use client";

import { motion } from "framer-motion";

interface Principle {
  title: string;
  description: string;
}

export default function Principles() {
  const principles: Principle[] = [
    {
      title: "Passion Drives Us",
      description: "Our passion fuels everything we do.",
    },
    {
      title: "People First",
      description: "Prioritise putting people at the centre.",
    },
    {
      title: "No Limits",
      description: "Challenge the norm, anything’s possible.",
    },
    {
      title: "Partners in Progress",
      description: "We partner with you, not just execute tasks.",
    },
    {
      title: "Attention to Detail",
      description: "Precision is the absolute key to success.",
    },
    {
      title: "Stay Playful",
      description: "We enjoy our work and believe in having fun.",
    },
    { title: "Community", description: "Giving back is essential." },
    {
      title: "Innovation",
      description: "We embrace forward-thinking solutions.",
    },
    {
      title: "Sustainability",
      description: "We commit to sustainable practices.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-8 lg:px-12 bg-[url('/images/svgs/pri.svg')] bg-cover bg-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-medium font-primary text-center text-gray-800 mb-4"
      >
        Our Principles
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg font-secondary font-semibold text-center text-gray-600 mb-10"
      >
        Shaping <span className="text-indigo-500">Every Single Decision</span>{" "}
        We Take
      </motion.p>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            className="flex items-start space-x-3 p-4"
          >
            {/* Blue bullet point */}
            <span className="w-2 h-2 rounded-full bg-blue-800 mt-2"></span>

            {/* Principle content */}
            <div>
              <h3 className="text-lg font-primary font-medium text-black">
                {principle.title}
              </h3>
              <p className="text-sm font-secondary text-gray-600 mt-2">
                {principle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
