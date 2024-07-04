import { BiArrowBack } from "react-icons/bi";
import { TbBrandAmazon } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import {
  amazingSectionModalData,
  amazingSectionModalServicesData,
} from "./amazingSectionData";
import Image from "next/image";


function AmazingSectionModal({ setShowAmazingModal, showAmazingModal }) {
  const [animateOut, setAnimateOut] = useState(false);

  const handleBackgroundClick = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowAmazingModal(false);
      setAnimateOut(false);
    }, 300);
  };

  ///////////
  /////making services in grid
  const renderGridModal = amazingSectionModalData().map((item) => {
    return (
      <div
        key={item.id}
        className="bg-blue-40 flex flex-col items-center cursor-pointer"
      >
        <Image
          height={50}
          width={50}
          className="rounded-full"
          alt="logo"
          src={item.src}
          unoptimized
        ></Image>
        <p className="text-[12px] fontBold pt-3 text-center">{item.title}</p>
      </div>
    );
  });

  ////////////
  ////making servicing grid for mobile version
  const renderServicesInMobile = amazingSectionModalServicesData().map(
    (item) => {
      return (
        <div
          key={item.id}
          className="flex justify-between items-center bg-green-30 cursor-pointer border-b py-2"
        >
          <div className="flex items-center  my-1  bg-yellow-30">
            <Image
              alt="serviceLogo"
              src={item.src}
              height={50}
              width={50}
              className="ml-4"
              unoptimized
            ></Image>
            <div className="space-y-2">
              <p className="text-[14px] fontBold">{item.title}</p>
              <p className="text-[12px] fontBold text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
          <div>
            <BiArrowBack className="text-gray-400" size={23} />
          </div>
        </div>
      );
    }
  );
  ////////////
  ////making servicing grid for desktop version
  const renderServicesInDesktop = amazingSectionModalServicesData().map(
    (item) => {
      return (
        <div
          key={item.id}
          className="border-2 px-2 rounded-2xl flex justify-between items-center bg-green-30 cursor-pointer border-b py-2"
        >
          <div className="flex items-center  my-1  bg-yellow-30">
            <Image
              alt="serviceLogo"
              src={item.src}
              height={50}
              width={50}
              className="ml-4"
              unoptimized
            ></Image>
            <div className="space-y-2">
              <p className="text-[14px] fontBold">{item.title}</p>
              <p className="text-[12px]  text-gray-400">{item.description}</p>
            </div>
          </div>
          <div>
            <BiArrowBack className="text-gray-400" size={23} />
          </div>
        </div>
      );
    }
  );


  /////////////
  ////JSX
  return (
    <div className="">
      <div
        onClick={handleBackgroundClick}
        className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center group"
      >
        {/* amazing modal in mobile version */}

        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white  absolute w-screen h-screen   z-[20] lg:hidden  rounded-2xl   ${
            animateOut ? " animate-to-bottom" : "animate-to-top"
          }`}
        >
          <div className="flex bg-white w-full   py-3 border-b fixed  justify-between px-4 z-[1] ">
            <div className="flex-center  ">
              <div className="ml-2">
                <TbBrandAmazon size={25} className="text-digiRed " />
              </div>

              <p className="fontBold text-gray-700 text-[15px]">
                خدمات دیجی کالا
              </p>
            </div>
            <div onClick={handleBackgroundClick} className="cursor-pointer">
              <CgClose size={20} />
            </div>
          </div>
          <div className=" bg-white   h-full   overflow-y-hidden">
            <div className="overflow-y-scroll h-[95%] mt-[50px]">
              <div className="grid grid-cols-3  gap-x-3 gap-y-5 mt- px-3 py-2">
                {renderGridModal}
              </div>
              <div className="mt-9 px-3">
                <p className="text-[13px] text-gray-500 fontBold tracking-tighter">
                  سرویس های گروه دیجی کالا
                </p>
              </div>
              <div className="px-3 mt-6 mb-4   gap-x-3 gap-y-5 ">
                {renderServicesInMobile}
              </div>
            </div>
          </div>
        </div>
        {/*end of amazing modal in mobile version */}

        {/* amazing modal in desktop version */}

        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white  absolute w-[50%] h-[740px] mt-24 py- z-[20] max-lg:hidden  rounded-2xl   ${
            animateOut ? " animate-to-bottom" : "animate-to-top"
          }`}
        >
          <div className="flex bg-white w-[50%] rounded-t-2xl  py-3 border-b fixed  justify-between px-4 z-[1] ">
            <div className="flex-center  ">
              <div className="ml-2">
                <TbBrandAmazon size={25} className="text-digiRed " />
              </div>

              <p className="fontBold text-gray-700 text-[15px]">
                خدمات دیجی کالا
              </p>
            </div>
            <div onClick={handleBackgroundClick} className="cursor-pointer">
              <CgClose size={20} />
            </div>
          </div>
          <div className=" bg-white  relativ h-full  rounded-2xl overflow-y-hidden">
            <div className="overflow-y-scroll h-[93%] mt-[50px]">
              <div className="grid grid-cols-6  gap-x-3 gap-y-5 mt- px-3 py-2">
                {renderGridModal}
              </div>
              <div className="mt-9 px-3">
                <p className="text-[13px] text-gray-500 fontBold tracking-tighter">
                  سرویس های گروه دیجی کالا
                </p>
              </div>
              <div className="px-3 mt-6 mb-5 grid grid-cols-2  gap-x-3 gap-y-5 ">
                {renderServicesInDesktop}
              </div>
            </div>
          </div>
        </div>
        {/*end of amazing modal in desktop version */}
      </div>
    </div>
  );
}

export default AmazingSectionModal;
