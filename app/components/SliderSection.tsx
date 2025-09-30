"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { projects } from "../../data/projects";
import Image from "next/image";

export default function SliderSection() {
  return (
    <section className="w-full flex justify-between items-start py-16 px-[60px] gap-10">
      {/* Left side: Title & Arrows */}
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
          Digital <br /> Marketing
        </h2>

        {/* Swiper navigation buttons will hook here */}
        <div className="flex gap-4">
          <button className="swiper-button-prev w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center hover:bg-purple-50 transition" />
          <button className="swiper-button-next w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center hover:bg-purple-50 transition" />
        </div>
      </div>

      {/* Right side: Swiper Slider */}
      <div className="flex-1">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md border border-purple-200 flex flex-col w-[420px] h-[430px] p-4">
                {/* Image */}
                <div className="w-full h-[200px] rounded-lg border border-purple-600 overflow-hidden mb-4">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={420}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-black mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags & Action */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full border border-purple-500 text-purple-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  <button className="ml-auto px-4 py-1 rounded-full border border-purple-600 text-purple-600 text-xs font-medium flex items-center gap-1 hover:bg-purple-50">
                    Read More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
