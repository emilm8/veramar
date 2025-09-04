import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

 
import { EffectFade, Autoplay } from 'swiper/modules';

import "../../index.css";

export default function Slider() {
  return (
    <Swiper
    spaceBetween={30}
    effect="fade"
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[EffectFade, Autoplay]}
    className="mySwiper h-[600px] "
  >
    <SwiperSlide>
      <div
        className="relative w-full h-full bg-cover bg-center "
        style={{ backgroundImage: "url('/img/slider21.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
            CONTACT
          </h2>
        </div>
      </div>
    </SwiperSlide>
  
    <SwiperSlide>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/slider22.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
            CONTACT
          </h2>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/slider23.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
            CONTACT
          </h2>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/slider24.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
            CONTACT
          </h2>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/slider25.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
            CONTACT
          </h2>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  
  );
}
