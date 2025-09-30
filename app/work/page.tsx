"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// 🔹 Import project data
import {
  projects,
  designProjects,
  aimlProjects,
  marketResearchProjects,
  Project,
} from "@/data/projects";

export default function WorkPage() {
  return (
    <Fragment>
      {/* Hero */}
      <section className="h-[300px] bg-white flex items-start px-8 md:px-12 lg:px-32 py-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-[#371B34] mb-4">
            Take a Glance at Our Best Work
          </h1>
          <p className="text-xl md:text-2xl text-[#5829C7] font-secondary font-semibold mb-4">
            We&apos;d love to hear from you!
          </p>
          <p className="text-lg md:text-xl font-medium text-[#757575]">
            Whether you&apos;re curious about our services, interested in
            working together, or just want to learn more about Yuvabe Studios,
            our team is here to help.
          </p>
        </motion.div>
      </section>

      {/* -------- Digital Marketing Section -------- */}
      {/* Digital Marketing (Left Title) */}
      <SectionWithSwiper
        title="Digital Marketing"
        gradient="linear-gradient(90deg, rgba(88,41,199,1) 0%, rgba(167,140,251,1) 100%)"
        projects={projects}
        borderColor="border-purple-300"
        textColor="text-[#5829C7]"
        buttonColor="border-[#5829C7] text-[#5829C7]"
        reverse
      />

      {/* Design (Right Title) */}
      <SectionWithSwiper
        title="Design"
        gradient="linear-gradient(90deg, rgba(0,119,255,1) 0%, rgba(167,206,251,1) 100%)"
        projects={designProjects}
        borderColor="border-blue-300"
        textColor="text-[#2C73D2]"
        buttonColor="border-[#2C73D2] text-[#2C73D2]"
      />

      {/* AI/ML (Left Title) */}
      <SectionWithSwiper
        title="AI/ML"
        gradient="linear-gradient(90deg, rgba(240,78,39,1) 0%, rgba(241,161,142,1) 100%)"
        projects={aimlProjects}
        borderColor="border-orange-300"
        textColor="text-[#FF5722]"
        buttonColor="border-[#FF5722] text-[#FF5722]"
        reverse
      />

      {/* Market Research (Right Title) */}
      <SectionWithSwiper
        title="Market Research"
        gradient="linear-gradient(90deg, rgba(15,135,69,1) 0%, rgba(16,233,114,1) 100%)"
        projects={marketResearchProjects}
        borderColor="border-green-300"
        textColor="text-[#0F8745]"
        buttonColor="border-[#0F8745] text-[#0F8745]"
        
      />
    </Fragment>
  );
}

/* -------------------- Reusable Section Component -------------------- */
interface SectionProps {
  title: string;
  gradient: string;
  projects: Project[];
  borderColor: string;
  textColor: string;
  buttonColor: string;
  reverse?: boolean;
}

function SectionWithSwiper({
  title,
  gradient,
  projects,
  borderColor,
  textColor,
  buttonColor,
  reverse = false,
}: SectionProps) {
  const safeId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
      <div
        className={`flex flex-col md:flex-row justify-between items-end ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Slider */}
        <div className="w-full md:w-[70%]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            effect="fade"
            slidesPerView={2}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: `.swiper-next-${safeId}`,
              prevEl: `.swiper-prev-${safeId}`,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div
                    className={`bg-white shadow-lg ${borderColor} border rounded-lg p-4 w-full sm:w-[417px] mx-auto sm:h-[420px] h-auto`}
                  >
                    <div className="relative w-full h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex flex-wrap gap-2 items-center">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-sm bg-gray-100 ${textColor} rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={project.link}>
                        <button
                          className={`flex items-center justify-center mt-3 md:mt-0 w-[126px] h-[30px] rounded-lg text-sm font-medium border ${buttonColor} hover:opacity-80 transition-all duration-300`}
                        >
                          <span className="mr-2">Read More</span>
                          <IoIosArrowForward />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Title + Navigation */}
        <motion.div
          className={`w-full md:w-1/3 flex flex-col items-center ${
            reverse ? "md:items-start" : "md:items-end"
          } mb-8 md:mb-0 relative`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left py-8"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h2>

          <div
            className={`swiper-nav flex space-x-4 border py-2 px-4 rounded-3xl w-[132px] h-[64px] ${buttonColor}`}
          >
            <button
              className={`swiper-prev-${safeId} w-[44px] h-[44px] rounded-full border-2 border-dashed flex items-center justify-center`}
              aria-label={`Previous ${title} Project`}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`swiper-next-${safeId} w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center`}
              aria-label={`Next ${title} Project`}
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
