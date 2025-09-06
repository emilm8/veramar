 import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "../../index.css";



 import { FreeMode, Pagination } from 'swiper/modules';
import PopCard from './PopCard';

export default function SliderCollec1() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <PopCard/>  </SwiperSlide>
       
      </Swiper>
    </>
  );
}
