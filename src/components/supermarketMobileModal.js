import { AiOutlineClose } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BiChevronLeft } from "react-icons/bi";
import React, { Fragment, useState } from "react";
import Image from "next/image";
function SupermarketMobileModal({ modals, setModals }) {
  const [animateUp, SetAnimateUp] = useState(true);
  return (
    <Fragment>
      {/* dark bg for supermarket modal mobile */}
      <div>
        <div
          className="w-screen h-screen fixed lg:hidden  z-[140] bg-black/40"
          onClick={() => {
            SetAnimateUp(false);
            setTimeout(() => {
              setModals({
                ...modals,
                supermarketModal: false,
              });
            }, 300);
          }}
        ></div>
        {/*end of dark bg for supermarket modal mobile */}
        {/* supermarket modal for mobile */}
        <div
          className={`${
            animateUp
              ? "animate-super-market-modal-up"
              : "animate-super-market-modal-down"
          } bg-white z-[150] fixed bottom-0 px-3 py-5 w-full rounded-t-2xl lg:hidden`}
        >
          <div>
            <p className="fontBold text-gray-600 tracking-tight mb-2">
              یکی از سوپرمارکت‌های زیر را انتخاب کنید
            </p>
            <p className="fontBold text-gray-400 text-[12px] mb-1">
              فقط در شهرهای تهران و کرج
            </p>
          </div>
          <div className="flex  gap-3 mt-4">
            <div className="bg-[#feebde] grow rounded-lg">
              <div className="flex items-center p-3">
                <p className="fontBold text-[15px] text-gray-800">
                  پرتخفیف و متنوع
                </p>
                <BiChevronLeft size={20} />
              </div>
              <div className="bg-digiGreen w-fit flex items-center gap-2 px-3 mx-2 py-1 rounded-l-full rounded-br-full">
                <TbTruckDelivery size={22} className="text-white" />
                <p className="text-[12px] fontBold text-white">ارسال امروز</p>
              </div>
              <div className="flex items-end justify-end">
                <Image
                  src={"/images/supermarketModal-images/fresh-shop-basket.webp"}
                  alt="jet shop"
                  width={140}
                  height={150}
                  unoptimized
                ></Image>
              </div>
            </div>
            <div className="bg-[#feebde] grow rounded-lg">
              <div className="flex items-center p-3">
                <p className="fontBold text-[15px] text-gray-800">
                  پرتخفیف و متنوع
                </p>
                <BiChevronLeft size={20} />
              </div>
              <div className="bg-[#ff8042] w-fit flex items-center gap-2 px-3 mx-2 py-1 rounded-l-full rounded-br-full">
                <BsClock size={20} className="text-white" />

                <p className="text-[12px] fontBold text-white"> ۴۵ دقیقه‌ای</p>
              </div>
              <div className="flex items-end justify-end">
                <Image
                  src={"/images/supermarketModal-images/jet-shop-basket.webp"}
                  alt="jet shop"
                  width={140}
                  height={150}
                  unoptimized
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* end of super market modal for mobile */}
        {/* supermarket modal in desktop */}

        <div
          className="fixed inset-0 bg-black/60 z-[60] flex justify-center items-center max-lg:hidden "
          onClick={() => {
            setModals({
              ...modals,
              supermarketModal: false,
            });
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={` bg-white z-[350]     px-3 py-5  rounded-2xl block w-[500px]`}
          >
            <div className="flex justify-between">
              <div>
                <p className="fontBold text-gray-600 tracking-tight mb-2">
                  یکی از سوپرمارکت‌های زیر را انتخاب کنید
                </p>
                <p className="fontBold text-gray-400 text-[12px] mb-1">
                  فقط در شهرهای تهران و کرج
                </p>
              </div>
              <div
                onClick={() => {
                  setModals({
                    ...modals,
                    supermarketModal: false,
                  });
                }}
                className="mt-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="flex  gap-3 mt-4">
              <div className="bg-[#feebde] grow h-[220px] rounded-lg cursor-pointer">
                <div className="flex items-center p-3">
                  <p className="fontBold text-[15px] text-gray-800">
                    پرتخفیف و متنوع
                  </p>
                  <BiChevronLeft size={20} />
                </div>
                <div className="bg-digiGreen w-fit flex items-center gap-2 px-3 mx-2 py-1 rounded-l-full rounded-br-full">
                  <TbTruckDelivery size={22} className="text-white" />
                  <p className="text-[12px] fontBold text-white">ارسال امروز</p>
                </div>
                <div className="flex items-end justify-end">
                  <Image
                    src={
                      "/images/supermarketModal-images/fresh-shop-basket.webp"
                    }
                    alt="jet shop"
                    width={140}
                    height={150}
                    unoptimized
                  ></Image>
                </div>
              </div>
              <div className="bg-[#feebde] grow h-[220px] rounded-lg cursor-pointer">
                <div className="flex items-center p-3">
                  <p className="fontBold text-[15px] text-gray-800">
                    پرتخفیف و متنوع
                  </p>
                  <BiChevronLeft size={20} />
                </div>
                <div className="bg-[#ff8042] w-fit flex items-center gap-2 px-3 mx-2 py-1 rounded-l-full rounded-br-full">
                  <BsClock size={20} className="text-white" />

                  <p className="text-[12px] fontBold text-white">
                    {" "}
                    ۴۵ دقیقه‌ای
                  </p>
                </div>
                <div className="flex items-end justify-end">
                  <Image
                    src={"/images/supermarketModal-images/jet-shop-basket.webp"}
                    alt="jet shop"
                    width={140}
                    height={150}
                    unoptimized
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* supermarket modal in desktop */}
      </div>
    </Fragment>
  );
}

export default SupermarketMobileModal;
