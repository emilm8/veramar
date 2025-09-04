import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import React, { useRef } from "react";
import { FaBottleWater } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Slide3({ products,category }) {
  const swiperRef = useRef(null);
  const navigate = useNavigate()


  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },  
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper custom-pagination"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full max-w-[300px] bg-[#f7ede0] rounded-lg overflow-hidden shadow"   onClick={()=>navigate(`/details/${category}/${item.id}`)} >
              <img
                src={item.img?.[0]?.trim?.() || <AiOutlineLoading3Quarters />
                }
                alt={item.name}
                className="w-full h-[420px] object-cover" 
              />
              <div className="p-3">
                <div className="text-lg font-mono text-[#5E6D50] font-light mb-2">
                  {item.name}
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                  <span>Recycle</span>
                  <FaBottleWater />
                  <span>{item.bottle || 10}</span>
                </div>
                <div className="mb-4 text-base font-medium">
                  <span className="line-through text-gray-400 mr-2">
                    Q {item.price + 500}
                  </span>
                  <span className="text-[#5E6D50] underline">
                    Q {item.price}
                  </span>
                </div>
                <button className="bg-[#D7CBB2] text-[#4B4B3F] font-semibold py-1.5 px-4 rounded shadow hover:bg-[#c6bca6] transition text-sm">
                  Select options
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 -left-20 transform -translate-y-1/2 z-10 p-2 bg-[#D7CBB2] rounded-full shadow hover:bg-[#c6bca6] hidden md:flex cursor-pointer"
      >
        <FaChevronLeft size={18} className="text-[#4B4B3F]" />
      </button>

     n 
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10 p-2 bg-[#D7CBB2] rounded-full shadow hover:bg-[#c6bca6] hidden md:flex cursor-pointer"
      >
        <FaChevronRight size={18} className="text-[#4B4B3F]" />
      </button>
     */ }
    </div>
  );
}
