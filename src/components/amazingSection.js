import { FiArrowLeft } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import AmazingSectionModal from "./amazingSectionModal";
import { FreeMode } from "swiper/modules";
import {
  AmazingSectionData,
  AmazingProductData,
  AmazingSuperMarketMobileData,
  AmazingSuperMarketDesktopData,
  AmazingGridData,
} from "./amazingSectionData";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
function AmazingSection({ modals, setModals }) {
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
          onClick={() => setModals({ ...modals, amazingSectionModal: true })}
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
  ///end of making swiper group swiper

  //making amazing product red box swiper

  const renderAmazingProductRedBoxSwiperMobile = () => {
    const renderInsideSwiper = AmazingProductData().map((item, i) => {
      return (
        <SwiperSlide
          key={item.id}
          className={`mx-auto bg-red-20  bg-white h-full ${
            i == 0 && "rounded-r-xl"
          } pt-3`}
        >
          <div className={` flex flex-col bg-blue-40  rounded-tr-xl`}>
            <div className=" bg-yellow-30 relative ">
              <Image
                className={`   h-44 px-2`}
                src={item.src}
                alt="image"
                height={1000}
                width={1000}
                unoptimized={true}
                objectFit="cover"
              ></Image>

              <span className="absolute bg-digiRed text-white text-[12px] px-[10px] rounded-xl py-[2px] text-center left-2 bottom-[1px]">
                {digitsEnToFa(`${item.discount} `)}
              </span>
            </div>
            <div className="text-center bg-yellow-40 ">
              <p className="text-[12px] pt-[12px] text-gray-600 tracking-tight text-balance line-clamp-1 px-1">
                {item.title}
              </p>
            </div>
            <div className="flex mt-3 items-center justify-end ml-2">
              <span className="fontBold">
                {digitsEnToFa(addCommas(`${item.realPrice} `))}
              </span>
              <div className="w-5 mr-1">
                <Image
                  unoptimized={true}
                  alt="tooman logo"
                  width={2000}
                  height={15}
                  src={"/images/amazing-images/amazing-offers/toomanLogo.png"}
                ></Image>
              </div>
            </div>
            <div className="flex lg:justify-end max-lg:justify-end  ml-9  lg:ml-[33px]  text-gray-300 ">
              <span className="fontBold line-through text-[14px]">
                {digitsEnToFa(addCommas(`${item.deletedPrice} `))}
              </span>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <Swiper
        navigation={true}
        direction="horizontal"
        slidesPerView={2}
        spaceBetween={3}
        mousewheel={true}
        pagination={true}
        className={`  mt-2    h-72`}
        grabCursor={true}
        simulateTouch={true}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
      >
        {renderInsideSwiper}

        {/*1 more slider item */}
        <SwiperSlide className="cursor-pointer bg-white  rounded-l-xl ">
          <div className="flex flex-col items-center justify-center  h-full">
            <BiArrowBack
              size={55}
              className="text-gray-400 border-2 rounded-full p-2 border-gray-400"
            />

            <p className="text-[18px] pt-[12px] text-gray-700 tracking-tight text-balance">
              مشاهده همه
            </p>
          </div>
        </SwiperSlide>
        {/* end of 1 more slider item */}
      </Swiper>
    );
  };

  // end of making amazing product swiper mobile

  // swiper for amazing product in desktop

  const renderAmazingProductRedBoxSwiperDesktop = () => {
    const renderInsideSwiper = AmazingProductData().map((item, i) => {
      return (
        <SwiperSlide
          key={item.id}
          className={`mx-auto bg-red-20 bg-white h-full ${
            i == 0 && "rounded-r-xl"
          } pt-3`}
        >
          <div className={` flex flex-col bg-blue-40  rounded-tr-xl`}>
            <div className=" bg-yellow-30 relative ">
              <Image
                className={`  object-cover h-44 px-2`}
                src={item.src}
                alt="image"
                height={1000}
                width={1000}
                unoptimized
              ></Image>

              <span className="absolute bg-digiRed text-white text-[12px] px-[10px] rounded-xl py-[2px] text-center left-2 bottom-[1px]">
                {digitsEnToFa(`${item.discount} `)}
              </span>
            </div>
            <div className="text-center bg-yellow-40 ">
              <p className="text-[12px] pt-[12px] text-gray-600 tracking-tight text-balance line-clamp-1 px-1">
                {item.title}
              </p>
            </div>
            <div className="flex mt-3 items-center justify-end ml-2">
              <span className="fontBold">
                {digitsEnToFa(addCommas(`${item.realPrice} `))}
              </span>
              <div className="w-5 mr-1">
                <Image
                  unoptimized={true}
                  alt="tooman logo"
                  width={2000}
                  height={15}
                  src={"/images/amazing-images/amazing-offers/toomanLogo.png"}
                ></Image>
              </div>
            </div>
            <div className="flex lg:justify-end max-lg:justify-center mr-9 lg:ml-[33px]  text-gray-300 ">
              <span className="fontBold line-through text-[14px]">
                {digitsEnToFa(addCommas(`${item.deletedPrice} `))}
              </span>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <Swiper
        navigation={true}
        direction="horizontal"
        slidesPerView={5}
        spaceBetween={3}
        mousewheel={true}
        pagination={true}
        className={`  mt-2    h-72`}
        grabCursor={true}
        simulateTouch={true}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 7,
          },
        }}
      >
        {renderInsideSwiper}

        {/*1 more slider item */}
        <SwiperSlide className="cursor-pointer bg-white  rounded-l-xl ">
          <div className="flex flex-col items-center justify-center  h-full">
            <BiArrowBack
              size={55}
              className="text-gray-400 border-2 rounded-full p-2 border-gray-400"
            />

            <p className="text-[18px] pt-[12px] text-gray-700 tracking-tight text-balance">
              مشاهده همه
            </p>
          </div>
        </SwiperSlide>
        {/* end of 1 more slider item */}
      </Swiper>
    );
  };

  ////////////
  ///making count down timer
  const [countdown, setCountdown] = useState({
    hours: 10,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { hours, minutes, seconds } = countdown;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
      } else {
        if (seconds > 0) {
          setCountdown({ hours, minutes, seconds: seconds - 1 });
        } else if (minutes > 0) {
          setCountdown({ hours, minutes: minutes - 1, seconds: 59 });
        } else if (hours > 0) {
          setCountdown({ hours: hours - 1, minutes: 59, seconds: 59 });
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  ///////////

  ////JSX
  return (
    <div className="py-3">
      <div className="  lg:hidden px-2">
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
      <div className="bg-red-30 mt-4 w-full 2xl:w-[70%] mx-auto px-2 lg:mx-auto max-xl:px-2">
        {AmazingSliders()}
      </div>
      {modals.amazingSectionModal && (
        <AmazingSectionModal modals={modals} setModals={setModals} />
      )}
      <div>
        {/* amazing section red swiper in mobile version */}
        <div className="  bg-blue-40 py-4 px-4 bg-gradient-to-r from-digiAmazingColorLeft to-digiAmazingColorRight lg:hidden">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                alt="percentage"
                src={"./images/amazing-images/amazing-offers/Amazing.svg"}
                height={25}
                width={25}
                className="ml-1"
                objectFit="cover"
              ></Image>
              <Image
                alt="words"
                src={
                  "./images/amazing-images/amazing-offers/incredible-word.svg"
                }
                height={55}
                width={100}
              ></Image>
              <div className="flex items-center gap-1 mr-1 h-6">
                <div className="bg-white h-6 w-6 rounded-sm text-center text-gray-800">
                  <span className=" text-center">
                    {digitsEnToFa(
                      countdown.seconds.toString().padStart(2, "0")
                    )}
                  </span>
                </div>
                <div className="fontBold text-white text-[20px] "> :</div>
                <div className="bg-white h-6 w-6 rounded-sm text-center text-gray-800">
                  <span>
                    {digitsEnToFa(
                      countdown.minutes.toString().padStart(2, "0")
                    )}
                  </span>
                </div>
                <div className="fontBold text-white text-[20px]  "> :</div>
                <div className="bg-white h-6 w-6  rounded-sm text-center text-gray-800">
                  <span>
                    {digitsEnToFa(countdown.hours.toString().padStart(2, "0"))}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <p className="text-white  text-[13px] fontBold">مشاهده همه</p>
              <BiChevronLeft size={20} className="text-white" />
            </div>
          </div>

          <div className="  mt-3 sm:mr-4 md:mr-2 ">
            {renderAmazingProductRedBoxSwiperMobile()}
          </div>
        </div>

        {/* supermarket amazing for mobile */}
        <div className="p-4 lg:hidden">
          <div className="  bg-gradient-to-r from-digiAmazingFreshBgLeft to-digiAmazingFreshBgRight rounded-xl">
            <div className="py-2 px-2 h-[180px] bg-no-repeat bg-[url('/images/amazing-images/freshPattern.svg')]   cursor-pointer ">
              <div className="flex  ">
                <Image
                  src={"/images/amazing-images/supermarketBox.webp"}
                  unoptimized
                  alt="supermarketBox"
                  height={40}
                  width={40}
                  className="ml-2"
                />
                <Image
                  src={"/images/amazing-images/supermarketAmazingText.svg"}
                  unoptimized
                  alt="supermarketText"
                  height={40}
                  width={200}
                />
              </div>
              <div className="bg-digiGreen w-fit rounded-3xl mr-3 mt-1">
                <p className="px-3 py-2 text-white fontBold text-[12px] text-center">{`تا ${digitsEnToFa(
                  "49%"
                )} تخفیف`}</p>
              </div>
              <div className="flex justify-between items-center px-3 mt-2 ">
                <div className="bg-red-40  flex gap-2 ">
                  {AmazingSuperMarketMobileData().map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-blue-30 bg-white rounded-full relative"
                      >
                        <Image
                          src={item.src}
                          alt="product image"
                          width={75}
                          height={75}
                          unoptimized
                          className="rounded-full p-2 "
                        />
                        <span className="absolute bottom-1 bg-digiRed text-white px-2 py-1 text-[11px] rounded-3xl fontBold">
                          {digitsEnToFa(item.discount)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <FiArrowLeft
                    size={45}
                    className="bg-white rounded-full p-3 text-digiGreen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end of supermarket amazing for mobile */}
        {/* making amazing grid in mobile */}
        <div className=" py-2  max-2xl:mx-2  lg:hidden">
          <div className=" grid grid-cols-2 gap-3 ">
            {AmazingGridData().map((item) => {
              return (
                <div className=" " key={item.id}>
                  <Image
                    src={item.src}
                    alt="amazing section grid "
                    width={220}
                    height={100}
                    unoptimized
                    objectFit="cover"
                    className="rounded-3xl h-[100%] w-[100%] mx-auto"
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
        {/*end of making amazing grid in mobile */}
      </div>
      {/* amazing section red swiper in desktop version */}
      <div className="flex 2xl:w-[70%] max-2xl:mx-2  lg:rounded-2xl  py-6 px-4 bg-gradient-to-r from-digiAmazingColorLeft to-digiAmazingColorRight max-lg:hidden 2xl:mx-auto">
        <div className="flex flex-col cursor-pointer bg-gray-40 w-[600px] items-center justify-around h-[225p] space-y-2 ">
          <Image
            alt="percentage"
            src={
              "./images/amazing-images/amazing-offers/AmazingWordForDesktop.svg"
            }
            height={125}
            width={110}
            className="ml-1"
            unoptimized={true}
          ></Image>
          <div className="flex items-center gap-[2px] mr-1 h-6">
            <div className="bg-white h-8 w-8 rounded-sm  flex-center">
              <span className="  text-[20px] fontBold ">
                {digitsEnToFa(countdown.seconds.toString().padStart(2, "0"))}
              </span>
            </div>
            <div className="fontBold text-white text-[24px] "> :</div>
            <div className="bg-white h-8 w-8 rounded-sm  flex-center">
              <span className="text-[20px] fontBold ">
                {digitsEnToFa(countdown.minutes.toString().padStart(2, "0"))}
              </span>
            </div>
            <div className="fontBold text-white text-[24px]  "> :</div>
            <div className="bg-white h-8 w-8  rounded-sm  flex-center">
              <span className="text-[20px] fontBold ">
                {digitsEnToFa(countdown.hours.toString().padStart(2, "0"))}
              </span>
            </div>
          </div>
          <Image
            alt="words"
            src={"./images/amazing-images/amazing-offers/Amazing.svg"}
            height={55}
            width={100}
            unoptimized
          ></Image>
          <div className="flex items-center justify-center cursor-pointer">
            <p className="text-white  text-[13px] fontBold">مشاهده همه</p>
            <BiChevronLeft size={20} className="text-white" />
          </div>
        </div>
        <div className="   overflow-hidden">
          {renderAmazingProductRedBoxSwiperDesktop()}
        </div>
      </div>{" "}
      {/*end of amazing section red swiper in desktop version */}
      {/* amazing super market in desktop  */}
      <div className="py-4 max-lg:hidden 2xl:w-[70%]  max-2xl:mx-2  2xl:mx-auto">
        <div className="  bg-gradient-to-r from-digiAmazingFreshBgLeft to-digiAmazingFreshBgRight rounded-xl">
          <div className="py-2 px-2 h-[100px] bg-no-repeat bg-[url('/images/amazing-images/freshPattern.svg')]   cursor-pointer ">
            <div className="flex  items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={"/images/amazing-images/supermarketBox.webp"}
                  unoptimized
                  alt="supermarketBox"
                  height={70}
                  width={70}
                  className="ml-2"
                />
                <Image
                  src={"/images/amazing-images/supermarketAmazingText.svg"}
                  unoptimized
                  alt="supermarketText"
                  height={50}
                  width={230}
                />
                <div className="bg-digiGreen h-fit rounded-3xl mr-4 flex items-center px-2 py-2">
                  <p className="text-center text-white fontBold lg:text-[10px] xl:text-[14px] ">{`تا ${digitsEnToFa(
                    "49%"
                  )} تخفیف`}</p>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 mt-2  ">
                <div className="  flex gap-1 xl:gap-4 ">
                  {AmazingSuperMarketDesktopData().map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-blue-30 bg-white rounded-full relative"
                      >
                        <Image
                          src={item.src}
                          alt="product image"
                          width={75}
                          height={75}
                          unoptimized
                          className="rounded-full p-2 "
                        />
                        <span className="absolute bottom-1 bg-digiRed text-white px-2 py-1 text-[11px] rounded-3xl fontBold">
                          {digitsEnToFa(item.discount)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="text-digiGreen bg-white flex items-center px-5 py-3 rounded-3xl text-[12px] fontBold mr-2">
                  <p>بیش از {digitsEnToFa(40)} کالا</p>
                  <FiArrowLeft size={20} className="  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of amazing super market in desktop  */}
      {/* making amazing grid in desktop */}
      <div className=" py-2 2xl:w-[70%] max-2xl:mx-2  2xl:mx-auto max-lg:hidden">
        <div className=" grid grid-cols-4 gap-3 ">
          {AmazingGridData().map((item) => {
            return (
              <div className="h-[240px] " key={item.id}>
                <Image
                  src={item.src}
                  alt="amazing section grid "
                  width={220}
                  height={100}
                  unoptimized
                  objectFit="cover"
                  className="rounded-3xl h-[100%] w-[100%] mx-auto"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AmazingSection;
