import { BsFire } from "react-icons/bs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Grid } from "swiper/modules";
import Image from "next/image";
import BestsellerSectionData from "./bestSellerSectionData";
import { digitsEnToFa } from "@persian-tools/persian-tools";

function BestsellerSection() {
  // making swiper
  const bestsellerSwiper = () => {
    const renderInsideSwiper = BestsellerSectionData().map((item, i) => {
      return (
        <SwiperSlide key={item.id} className="bg-gray-0">
          <div className=" flex items-center bg-blue-40  ">
            <div className="  w-[100px] h-full">
              <Image
                className={`bg-yellow-00  `}
                src={item.src}
                alt="image"
                height={1000}
                width={1000}
                unoptimized
              

              ></Image>
            </div>
            <div className="text-center bg-yellow-40 w-[220px] h-[90px] flex items-center border-b">
              <p className="text-2xl text-digiBlue ml-4">

                {digitsEnToFa(item.id)}
              </p>
              <p className="text-[12px] line-clamp-2 text-gray-700 tracking-tight text-balance">
                {item.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <Swiper
        grid={{
          rows: 3,
        }}
        spaceBetween={30}
        navigation={true}
        direction="horizontal"
        slidesPerView={2}
        mousewheel={true}
        pagination={true}
        className={` mt-3  h-[350px] bg-gray-60 `}
        grabCursor={true}
        simulateTouch={true}
        modules={[Grid, Navigation]}
        breakpoints={{
          640: {
            slidesPerView:2,
            grid: {
              rows: 3,
            },
          },
          768: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
          },
          1280: {
            slidesPerView: 4,
            grid: {
              rows:3,
            },
          },
        }}
      >
        {renderInsideSwiper}
      </Swiper>
    );
  };
  ///end of making swiper group swiper
  return (
    <div className="2xl:w-[75%] mx-auto my-3">
      <div className="p-4 lg:border lg:rounded-xl">
        <div className="flex items-center justify-between lg:justify-center lg:relative">
          <div className="flex items-center lg:text-center ">
            <BsFire size={25} className="text-yellow-500  ml-3" />
            <p className="tracking-tighter fontBold ">پرفروش ترین ها کالا ها</p>
          </div>
          <p className="text-digiBlue text-[13px] fontBold cursor-pointer lg:absolute lg:left-7">
            مشاهده همه
          </p>
        </div>
        <div className="">{bestsellerSwiper()}</div>
      </div>
    </div>
  );
}

export default BestsellerSection;
