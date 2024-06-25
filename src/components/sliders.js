import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import React, { useRef, useState } from "react";
import SlidersData from "./slidersData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function SlidersComponent() {
  const renderInsideSlider = SlidersData().map((item) => {
    return (
      <SwiperSlide key={item.id} className="">
        <Image
          fill
          src={item.src}
          alt="photoBanner"
          priority
          quality={100}
          className="object-cover "
        ></Image>
      </SwiperSlide>
    );
  });

  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
 
  return (
    <div className="relative group cursor-pointer -mt-2">
      <Swiper
       style={{  "--swiper-pagination-color":" #FFf",
        "--swiper-pagination-bullet-size": "6px",
      
       }
      }
        speed={600}
        centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        pagination={{
          clickable: true,
        
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className={`mySwiper bg-blue-200 lg:h-[440px]  h-[300px] mt-5 `}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
      >
        {renderInsideSlider}
      </Swiper>
      <div className="absolute bottom-5 right-9  z-[100] opacity-0 group-hover:opacity-100 transition-all duration-400 ">
        <button
          className="mx-1 lg:p-2 p-1 border border-gray-400 bg-white rounded-full text-gray-500  hover:text-gray-800 hover:border-gray-700"
          ref={prevRef}
        >
          <BiChevronRight size={25} />
        </button>
        <button
          className="mx-1 lg:p-2 p-1 border border-gray-400 bg-white rounded-full text-gray-500 hover:text-gray-800  hover:border-gray-700"
          ref={nextRef}
        >
          <BiChevronLeft size={25} />
        </button>
      </div>
    </div>
  );
}

export default SlidersComponent;
