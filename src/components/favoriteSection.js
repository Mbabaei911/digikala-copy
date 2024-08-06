import { BsGift } from "react-icons/bs";
import { GiDart } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { BiChevronLeft } from "react-icons/bi";
import { GiStarFormation } from "react-icons/gi";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { FavoriteSectionData, FavoriteGridData } from "./favoriteSectionData";
import { Navigation } from "swiper/modules";

function FavoriteSection() {
  // making swiper
  const FavoriteSlider = () => {
    const renderInsideSwiper = FavoriteSectionData().map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          className="mx-auto bg-yellow-30 border-l cursor-pointer"
        >
          <div className="h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] bg-red-40 mx-auto flex-center">
            <Image
              className=""
              quality={100}
              src={item.src}
              alt="image"
              height={1000}
              width={1000}
              unoptimized
            ></Image>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <Swiper
        direction="horizontal"
        navigation={true}
        slidesPerView={4}
        mousewheel={true}
        className={`   swiper`}
        grabCursor={true}
        simulateTouch={true}
        modules={[Navigation]}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
         
          768: {
            slidesPerView: 9,
          },
        }}
      >
        {renderInsideSwiper}
      </Swiper>
    );
  };
  //end of making swiper

  
  ///////////
  //rendering inside favorite grid
  const renderingFavoriteGrid = FavoriteGridData().map((item, i) => {
    return (
      <div className="" key={item.id}>
        <div
          className={`p-3 max-lg:border-b bg-red-4  ${
            i == 1 && "lg:border-x"
          } ${i == 2 && "lg:border-l"}`}
        >
          <p className="tracking-tighter fontBold text-[16px]">{item.title}</p>
          <p className="text-gray-500 text-[11px] mt-1">براساس سلیقه شما</p>
          <div className="    grid grid-cols-2  ">
            {item.items.map((items, i) => {
              return (
                <div
                  key={i}
                  className={`  flex-center  ${
                    i == 0 && "border-l-[.5px] border-b-[.5px]"
                  }  ${i == 1 && "border-r-[.5px] border-b-[.5px]"}   ${
                    i == 2 && "border-l-[.5px] border-t-[.5px]"
                  }    ${
                    i == 3 && "border-r-[.5px] border-t-[.5px]"
                  } border-gray-100  p-2`}
                >
                  <Image
                    alt="image"
                    src={items.src}
                    height={150}
                    width={210}
                    unoptimized
                    layout="responsive"
                    className=""
                  />
                </div>
              );
            })}
          </div>
          <div className="flex-center my-4 cursor-pointer">
            <p className="text-digiBlue text-[12px]">مشاهده</p>
            <BiChevronLeft className="text-digiBlue" size={20} />
          </div>
        </div>
      </div>
    );
  });
  ///////////
  //end of rendering inside favorite grid

  ////////////
  ///digi club render for mobile
  const renderDigiClubMobileversion = () => {
    return (
      <div className="  w-full bg-gradient-to-r from-digiClubLeftColor to-digiClubRightColor p-4">
        <div>
          <Image
            src={"/images/amazing-images/digi-club/digiclub-logo-white.svg"}
            alt="digiclub"
            height={120}
            width={120}
            unoptimized
          ></Image>
        </div>
        <div className="mt-3 ">
          <div className=" mx-auto  flex-center  ">
            <div className="bg-white flex-center flex-col rounded-r-md  w-28  cursor-pointer">
              <GiDiamondRing size={20} className="text-digiBlue my-2" />
              <p className="text-[12px]">چرخ و بخت</p>
              <Image
                className="w-full h-[50px] rounded-r-md mt-3"
                src={"/images/amazing-images/digi-club/wheel-spinner.webp"}
                alt="wheel-spinner "
                unoptimized
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="bg-white flex-center flex-col mx-1 w-28 cursor-pointer">
              <GiDart size={20} className="text-digiBlue my-2" />
              <p className="text-[12px]">ماموریت ها </p>
              <Image
                className="w-full h-[50px]  mt-3"
                src={"/images/amazing-images/digi-club/missions.webp"}
                alt="mission "
                unoptimized
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="bg-white flex-center flex-col rounded-l-md  w-28 cursor-pointer">
              <BsGift size={20} className="text-digiBlue my-2" />
              <p className="text-[12px]"> جایزه ها</p>
              <Image
                className="w-full h-[50px] rounded-l-md mt-3"
                src={"/images/amazing-images/digi-club/awards.webp"}
                alt="awards "
                unoptimized
                width={50}
                height={50}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    );
  };
  ////////////
  ///end of digi club render for mobile

  //////////
  ///render digi club for desktop
  const renderDigiClubDesktopversion = () => {
    return (
      <div className="   bg-gradient-to-r from-digiClubLeftColor to-digiClubRightColor    my-3 rounded-2xl  p-4 mx-auto">
        <div className="flex items-center w-full justify-between ">
          <div>
            <Image
              src={"/images/amazing-images/digi-club/digiclub-logo-white.svg"}
              alt="digiclub"
              height={120}
              width={120}
              unoptimized
              className="mr-4"
            ></Image>
          </div>

          <div className="  flex-center  ">
            <div className="bg-white  flex items-center  rounded-r-md   cursor-pointer ">
              <GiDiamondRing size={25} className="text-digiBlue mx-2" />
              <p className="text-[12px] ml-2">چرخ و بخت</p>
              <Image
                className="rounded-r-md "
                src={"/images/amazing-images/digi-club/wheel-spinner.webp"}
                alt="wheel-spinner "
                unoptimized
                width={125}
                height={125}
              ></Image>
            </div>
            <div className="bg-white flex-center  mx-1 cursor-pointer">
              <GiDart size={35} className="text-digiBlue mx-2" />
              <p className="text-[12px] text-nowrap">ماموریت ها </p>
              <Image
                className=" mr-2 "
                src={"/images/amazing-images/digi-club/missions.webp"}
                alt="mission "
                unoptimized
                width={125}
                height={125}
              ></Image>
            </div>
            <div className="bg-white flex items-center  rounded-l-md   cursor-pointer">
              <BsGift size={25} className="text-digiBlue mx-2" />
              <p className="text-[12px] text-nowrap"> جایزه ها</p>
              <Image
                className=" rounded-l-md "
                src={"/images/amazing-images/digi-club/awards.webp"}
                alt="awards"
                unoptimized
                width={125}
                height={125}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //////////
  ///end of render digi club for desktop
  /////////
  /////JSX
  return (
    <div className="2xl:w-[75%]  mx-auto mb-3 mt-2">
      <div className="   lg:border lg:rounded-2xl mx-3">
        <div className=" fontBold text-[17px] my-2 flex-center ">
          <GiStarFormation size={25} className="text-yellow-400 ml-2" />
          <p>محبوب ترین برند ها</p>
        </div>
        <div className="mx-4 my-4">{FavoriteSlider()}</div>
      </div>
      <div className="mt-5 lg:border  lg:rounded-2xl lg:grid-cols-4 lg:grid mx-2">
        {renderingFavoriteGrid}
      </div>
      <div className="lg:hidden">{renderDigiClubMobileversion()}</div>
      <div className="max-lg:hidden">{renderDigiClubDesktopversion()}</div>
    </div>
  );
}

export default FavoriteSection;
