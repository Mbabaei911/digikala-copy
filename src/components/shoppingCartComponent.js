import { BiChevronLeft } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";
import React, { Fragment } from "react";
import Image from "next/image";
import { RegisterModalForShoppingPage } from "./registerModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BiArrowBack } from "react-icons/bi";
import { AmazingProductData } from "./amazingSectionData";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { FreeMode, Navigation } from "swiper/modules";

function ShoppingCartComponent({ setShowRegisterModal, showRegisterModal }) {
  const renderAmazingProductRedBoxSwiper = () => {
    const renderInsideSwiper = AmazingProductData().map((item, i) => {
      return (
        <SwiperSlide
          key={item.id}
          className={`mx-auto bg-red-20  bg-white h-full  pt-3`}
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
        spaceBetween={2}
        mousewheel={true}
        pagination={true}
        className={`  mt-2 bg-gray-100  h-72`}
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
      </Swiper>
    );
  };

  return (
    <Fragment>
      {showRegisterModal && (
        <div className="w-screen h-screen fixed top-0 z-[150]">
          <RegisterModalForShoppingPage
            showRegisterModal={showRegisterModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        </div>
      )}

      {/* making shopping cart page for mobile */}
      <div className="lg:hidden">
        <div className="  mb-3  bg-neutral-50/50 lg:hidden border-b">
          <div className="flex  gap-x-2 px-3  border-b">
            <div className=" py-3 bg-red-20 flex items-center w-full  justify-center relative cursor-pointer">
              <p className="text-[14px] fontBold">سبد خرید</p>
              <div className=" bg-digiFixedCustomerService absolute w-full bottom-0 h-1 rounded-t-3xl"></div>
            </div>
            <div className=" py-3 bg-red-20 flex items-center w-full  justify-center relative cursor-pointer">
              <p className="text-[14px] fontBold"> خرید بعدی</p>
              <div className=" bg-digiFixedCustomerService absolute w-full bottom-0 h-1 rounded-t-3xl hidden"></div>
            </div>
          </div>
          <div className="py-5 px-2  cursor-pointer bg-blue-20">
            <div
              onClick={() => setShowRegisterModal(true)}
              className="px-4 border rounded-md shadow-md bg-green-40"
            >
              <div className="flex items-center justify-between pt-6 ">
                <div className="flex items-center">
                  <TbDoorEnter size={25} className="text-yellow-500" />
                  <p className="mx-2 text-[14px] fontBold">
                    ورود به حساب کاربری
                  </p>
                </div>
                <div>
                  <BiChevronLeft size={25} />
                </div>
              </div>
              <div className="py-3">
                <p className="text-[12px] text-gray-500">
                  برای مشاهده محصولاتی که پیش تر به سبد خرید خود اضافه کرده اید
                  وارد شوید.
                </p>
              </div>
            </div>
            <div className="px-4 py-2 bg-red-10">
              <Image
                className="mx-auto"
                src={"/images/shopping-cart-images/empty-cart.svg"}
                alt="empty cart "
                width={200}
                height={150}
                unoptimized
              ></Image>
              <p className="text-center mt-2 text-[16px] fontBold ">
                سبد خرید شما خالی است!
              </p>
              <p className="text-center mt-2 text-[12px] fontBold text-gray-500">
                می توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
              </p>
            </div>
          </div>
        </div>
        <div className=" border-t-8 border-neutral-100 lg:hidden">
          <div className="relative">
            <p className="ps-6 py-3 fontBold ">بازدید های اخیر</p>
            <div className=" bg-digiFixedCustomerService absolute w-[130px] mr-3 bottom-0 h-[2px] rounded-t-3xl"></div>
          </div>
          {renderAmazingProductRedBoxSwiper()}
        </div>
      </div>

      {/*end  of making shopping cart page for mobile */}

      {/* making shopping cart page for desktop */}
      <div className="max-lg:hidden pt-3 ps-3 mt-[160px] 2xl:container bg-blue-00 2xl:mx-auto  pb-8">
        <div className="bg-red-0 border-b">
          <div className="flex  gap-x-2 px-3  ">
            <div className=" py-3 bg-red-20 flex items-center justify-center relative cursor-pointer">
              <p className="text-[16px] fontBold text-digiFixedCustomerService">
                سبد خرید
              </p>
              <div className=" bg-digiFixedCustomerService absolute w-full bottom-0 h-1 rounded-t-3xl"></div>
            </div>
            <div className=" py-3 bg-red-20 flex items-center  justify-center relative cursor-pointer">
              <p className="text-[16px] fontBold text-gray-500 mr-2">
                خرید بعدی
              </p>
              <div className=" bg-digiFixedCustomerService absolute w-full bottom-0 h-1 rounded-t-3xl hidden"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 my-3">
          <div className=" border rounded-md pb-10 w-3/4">
            <Image
              className="mx-auto"
              src={"/images/shopping-cart-images/empty-cart.svg"}
              alt="empty cart "
              width={200}
              height={150}
              unoptimized
            ></Image>
            <p className="text-center mt-2 text-[16px] fontBold ">
              سبد خرید شما خالی است!
            </p>
            <p className="text-center mt-2 text-[12px] fontBold text-gray-500">
              می توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
            </p>
          </div>
          <div className="  rounded-md w-1/4 relative">
            <div
              onClick={() => setShowRegisterModal(true)}
              className="px-4 border rounded-md  bg-green-00 sticky top-[190px]"
            >
              <div className="flex items-center justify-between pt-6 ">
                <div className="flex items-center">
                  <TbDoorEnter size={25} className="text-yellow-500" />
                  <p className="mx-2 text-[14px] fontBold">
                    ورود به حساب کاربری
                  </p>
                </div>
                <div>
                  <BiChevronLeft size={25} />
                </div>
              </div>
              <div className="py-3">
                <p className="text-[12px] text-gray-500">
                  برای مشاهده محصولاتی که پیش تر به سبد خرید خود اضافه کرده اید
                  وارد شوید.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border rounded-md ">
          <div className="relative">
            <p className="ps-6 py-3 fontBold ">بازدید های اخیر</p>
            <div className=" bg-digiFixedCustomerService absolute w-[130px] mr-3 bottom-0 h-[2px] rounded-t-3xl"></div>
          </div>
          {renderAmazingProductRedBoxSwiper()}
        </div>
      </div>
      {/*end of making shopping cart page for desktop */}
    </Fragment>
  );
}

export default ShoppingCartComponent;
