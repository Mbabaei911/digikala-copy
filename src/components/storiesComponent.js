import React, { useEffect} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import StoriesComponentData from "./storiesComponentData";
import { Navigation } from "swiper/modules";

const StoriesSection = () => {
  
 
  const renderInsideSwiper = StoriesComponentData().map((item, i) => {
    return (
      <SwiperSlide key={item.id} className="mt-4">
        <div className=" flex-center flex-col">
          <div className=" p-[3px]  to-digiStoriBorderTopColor from-digiStoriBorderBottomColor rounded-full bg-gradient-45">
            <div className="bg-white p-[3px] rounded-full">
              {/* only for first  */}
              <div
                className={`${
                  i !== 0 && "hidden"
                } p-[5px]  to-digiStoriBorderTopColor from-digiStoriBorderBottomColor rounded-full bg-gradient-45 h-[70px] w-[70px] `}
              >
                <Image
                  className=" rounded-full object-cover"
                  src={item.src}
                  alt="image"
                  height={500}
                  width={500}
                ></Image>
                <div className="mt-[2px] text-[12px] bg-digiStoriBorderBottomColor text-center text-white  border border-white rounded-md py-[1px] w-8 mx-auto">
                  <p>زنده</p>
                </div>
              </div>

              {/*end of only for first  */}
              <div>
                <Image
                  className={`${
                    i === 0 && "hidden"
                  } rounded-full h-[70px] w-[70px] object-cover`}
                  src={item.src}
                  alt="image"
                  height={1000}
                  width={1000}
                ></Image>
              </div>

              {/*end of only for second and beyond */}
            </div>
          </div>
          <div className="text-center bg-yellow-40 w-16">
            <p className="text-[11px] pt-[12px] text-gray-700 tracking-tight text-balance">
              {item.title}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      navigation={true}
      direction="horizontal"
      slidesPerView={12}
      spaceBetween={2}
      mousewheel={true}
      pagination={true}
      className={` h-[165px]  bg-yellow-40 2xl:w-[85%]  swiper lg:mt-[150px] `}
      grabCursor={true}
      simulateTouch={true}
      modules={[Navigation]}
      
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 8,
        },
        1280: {
          slidesPerView: 12,
        },
      }}
    >
      {renderInsideSwiper}
    </Swiper>
  );
};

export default StoriesSection;
