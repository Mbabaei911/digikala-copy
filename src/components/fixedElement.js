import { IoMdClose } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { RiShoppingBasketFill } from "react-icons/ri";
import React from "react";
import Link from "next/link";

function FixedElement({ modals, setModals }) {
  return (
    <div>
      {/* fixed element for mobile */}
      <div className={`fixed bottom-0 w-full z-20 bg-yellow-30 lg:hidden `}>
        <div
          onClick={() => setModals({ ...modals, supermarketModal: true })}
          className={`bg-digiGreen relative px-3 py-2 rounded-3xl flex items-center w-fit mx-auto transform cursor-pointer ${
            modals.supermarketOpen ? "translate-y-0 " : "translate-y-20"
          }    transition duration-500 ease-in-out z-10`}
        >
          <div className="border-l-2 pl-2 border-gray-400">
            <RiShoppingBasketFill className="text-white" size={25} />
          </div>
          <div className="pr-3 text-[13px] text-white fontBold ">
            <p>سوپرمارکت، تنوع بالا، پرتخفیف</p>
          </div>
        </div>

        <div className="bg-white relative w-full flex items-center justify-center mt-1  bg-green-20 border-y-2 shadow py-1 z-40">
          <div className="relative flex flex-col items-center flex-1 text-gray-400 navbarBottomItem cursor-pointer">
            <Link href={"/"}>
            <BiHomeAlt2 size={25} />
            <p className="text-[11px] mt-1 fontBold ">خانه</p>
            </Link>
          </div>
          <div className=" flex flex-col items-center flex-1 text-gray-400 navbarBottomItem relative cursor-pointer ">
            <BiCategoryAlt size={25} />
            <p className="text-[11px] mt-1 fontBold ">دسته بندی</p>
          </div>
          <Link href={"/shoppingCartPage"}>
            <div className=" flex flex-col items-center flex-1 text-gray-400 navbarBottomItem relative cursor-pointer ">
              <CgShoppingCart size={25} />
              <p className="text-[11px] mt-1 fontBold ">سبد خرید</p>
            </div>
          </Link>
          <div className="flex flex-col items-center flex-1 text-gray-400 navbarBottomItem relative cursor-pointer ">
            <BsPerson size={25} />
            <p className="text-[11px] mt-1 fontBold ">دیجی کالای من</p>
          </div>
        </div>
      </div>
      {/*end of  fixed element for mobile */}
      {/* fixed element for desktop */}
      <div className="max-lg:hidden">
        <div
          onClick={() => setModals({ ...modals, supermarketModal: true })}
          className={`bg-digiGreen fixed  px-3 bottom-5 left-5  py-2 rounded-3xl flex items-center  mx-auto transform z-[31] cursor-pointer directionLtr ${
            modals.supermarketOpen
              ? "transition-all transform duration-300  w-[285px]"
              : "transition-all transform duration-300  w-[150px]"
          }    `}
        >
          <div className=" pl-2 z-20 bg-digiGreen ">
            <RiShoppingBasketFill className="text-white" size={33} />
          </div>

          <div
            className={`  border-r-2 border-gray-400 text-nowrap text-[15px]  text-white fontBold flex items-center directionLtr overflow-hidden z-10 ${
              modals.supermarketOpen
                ? "w-full transition-all transform duration-300 -translate-x-0 px-1"
                : " transition-all transform duration-300 -translate-x-10 border-none"
            }`}
          >
            تنوع بالا، پرتخفیف
          </div>
          <p className="pr-3 text-[15px] text-white fontBold  pl-2 ">
            سوپرمارکت
          </p>
        </div>
        <div className="  fixed   bottom-5 right-14 bg-digiFixedCustomerService rounded-full z-[29]">
          {modals.customerServiceModal ? (
            <button
              onClick={() =>
                setModals({ ...modals, customerServiceModal: false })
              }
              className="p-3"
            >
              <IoMdClose size={25} className="text-white" />{" "}
            </button>
          ) : (
            <button
              onClick={() =>
                setModals({ ...modals, customerServiceModal: true })
              }
              className="p-3"
            >
              <RiCustomerService2Fill size={25} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FixedElement;
