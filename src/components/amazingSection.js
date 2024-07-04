import { FiMoreHorizontal } from "react-icons/fi";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import AmazingSectionModal from "./amazingSectionModal";
import { Navigation } from "swiper/modules";
import { AmazingSectionData } from "./amazingSectionData";
function AmazingSection() {
  const [ShowAmazingModal, setShowAmazingModal] = useState(false);
  console.log(ShowAmazingModal);

  // making swiper
  const AmazingSliders = () => {
    const renderInsideSwiper = AmazingSectionData().map((item, i) => {
      return (
        <SwiperSlide key={item.id} className="mx-auto">
          <div className=" flex-center flex-col bg-blue-40 w-12">
            <div className=" bg-yellow-30  ">
              <Image
                className={`  object-cover`}
                src={item.src}
                alt="image"
                height={1000}
                width={1000}
              ></Image>
            </div>
            <div className="text-center bg-yellow-40 ">
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
        slidesPerView={7}
        mousewheel={true}
        pagination={true}
        className={` h-[120px] mt-2   swiper `}
        grabCursor={true}
        simulateTouch={true}
        modules={[Navigation]}
        breakpoints={{
         
         
          1280: {
            slidesPerView: 10,
          },
        }}
      >
        {renderInsideSwiper}

        {/* more slider item */}
        <SwiperSlide
          className="cursor-pointer mx-auto"
          onClick={() => setShowAmazingModal(true)}
        >
          <div className=" flex-center flex-col bg-blue-40 ">
            <div className=" bg-gray-100  p-2 rounded-full">
              <FiMoreHorizontal size={35} className="text-gray-400" />
            </div>
            <div className="text-center bg-yellow-40 ">
              <p className="text-[11px] pt-[12px] text-gray-700 tracking-tight text-balance">
                بیشتر
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* end of more slider item */}
      </Swiper>
    );
  };
  ///end of making swiper

  ////JSX
  return (
    <div className="p-3">
      <div className="  lg:hidden">
        <Image
          className="mx-auto"
          src={"/images/amazing-images/photo1.png"}
          alt="amazing photo image"
          layout="responsive"
          width={1024}
          height={700}
          unoptimized={true}
        ></Image>
      </div>
      <div className="bg-red-30 mt-4 w-full lg:w-[80%] mx-auto">{AmazingSliders()}</div>

      {ShowAmazingModal && (
        <AmazingSectionModal
          ShowAmazingModal={ShowAmazingModal}
          setShowAmazingModal={setShowAmazingModal}
        />
      )}
    </div>
  );
}

export default AmazingSection;
