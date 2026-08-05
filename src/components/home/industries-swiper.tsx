"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { industries } from "@/lib/company";

export function IndustriesSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={16}
      slidesPerView={1.15}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
      }}
      className="!pb-12"
    >
      {industries.map((ind) => (
        <SwiperSlide key={ind.name}>
          <div className="h-full min-h-[160px] border border-white/15 bg-white/5 px-5 py-6">
            <h3 className="font-display text-2xl text-white">{ind.name}</h3>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">
              {ind.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
