import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AdsSlider() {
  return (

    <>
    <div className="w-full  h-[400px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px]">


        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/sliderPhoto.webp')" }} >


            <div className="absolute inset-80 flex  justify-end-safe z-10">
              <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
               BLACK SAND
              </h2>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/sliderPhoto2.webp')" }}>
              

              <div className="absolute inset-80 flex  justify-end-safe z-10">
              <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
               BLACK SAND
              </h2>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div
          className="relative w-full h-[600px] bg-cover bg-center "
          style={{ backgroundImage: "url('/img/sliderPhoto3.webp')" }}>

        
            <div className="absolute inset-80 flex  justify-end-safe z-10">
              <h2 className="text-white text-3xl md:text-6xl font-bold font-mono text-center">
               BLACK SAND
              </h2>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
    
  );
}

export default AdsSlider;
