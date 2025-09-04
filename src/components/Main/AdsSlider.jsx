import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';



function AdsSlider() {
  return (
    <div className="w-full h-[400px]">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper h-[600px]"
    >
    
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/img/sliderPhoto.webp')" }}
        >
          <div className="absolute inset-0 flex items-center justify-end md:justify-end px-6 md:pr-20 z-10">
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h2 className="text-white text-2xl md:text-7xl font-light tracking-wide mb-4 fraunces">
                BLACK SAND
              </h2>
              <Link to="/collection">
                <button className="bg-[#D7CBB2] text-black px-4 py-2 rounded hover:bg-white transition cursor-pointer">
                  New Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
  
      
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/img/sliderPhoto2.webp')" }}
        >
          <div className="absolute inset-0 flex items-center justify-end md:justify-end px-6 md:pr-20 z-10">
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h2 className="text-white text-3xl md:text-7xl font-light tracking-wide mb-4 fraunces">
                BLACK SAND
              </h2>
              <Link to="/collection">
                <button className="bg-[#D7CBB2] text-black px-4 py-2 rounded hover:bg-white transition cursor-pointer">
                  New Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
  
     
      <SwiperSlide>
        <div
          className="relative w-full h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/sliderPhoto3.webp')" }}
        >
          <div className="absolute inset-0 flex items-center justify-end md:justify-end px-6 md:pr-20 z-10">
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h2 className="text-white text-3xl md:text-7xl font-light tracking-wide mb-4 fraunces">
                BLACK SAND
              </h2>
              <Link to="/collection">
                <button className="bg-[#D7CBB2] text-black px-4 py-2 rounded hover:bg-white transition cursor-pointer">
                  New Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  
  );
}

export default AdsSlider;
