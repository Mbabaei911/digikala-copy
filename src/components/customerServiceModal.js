import { BiChevronLeft } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import React, { useState } from "react";

function CustomerServiceModal({ modals, setModals }) {
  const [dropdowns, setDropdowns] = useState({
    firstDropdown: false,
    secondDropdown: false,
    thirdDropdown: false,
  });
  console.log(dropdowns);
  return (
    <div className=" bg-white  z-[10] rounded-2xl border border-digiFixedCustomerService fixed bottom-[70px] right-10 overflow-hidden w-[380px] h-[650px] max-lg:hidden">
      <div className="flex items-center justify-between rounded-t-2xl p-3  bg-digiFixedCustomerService  text-white ">
        <div className="  fontBold text-[18px]">پشتیبانی آنلاین</div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setModals({ ...modals, customerServiceModal: false });
          }}
        >
          <BiArrowBack size={25} />
        </div>
      </div>
      <div
        className={` h-[92%] w-full ${
          dropdowns.firstDropdown ||
          dropdowns.secondDropdown ||
          dropdowns.thirdDropdown
            ? "overflow-y-scroll"
            : ""
        } `}
      >
        <div>
          <div className="text-[17px] fontBold p-3">
            سلام <span className="text-[20px]">👋👋</span>
          </div>
          <div className="text-[13px] py-3 px-2 text-wrap fontBold">
            اینجا می‌توانید تعدادی از پرسش های متداول را ببینید یا در صورت تمایل
            با ما آنلاین گفتگو کنید!
          </div>
        </div>
        <div className="px-3 border rounded-md m-2 ">
          <div
            onClick={() =>
              setDropdowns({
                ...dropdowns,
                firstDropdown: !dropdowns.firstDropdown,
              })
            }
            className={`flex items-center justify-between cursor-pointer ${
              dropdowns.firstDropdown && "border-b"
            } pt-3 pb-8`}
          >
            <p className="text-[16px] fontBold ">
              چگونه میتوانم یک پروفایل ایجاد کنم؟
            </p>
            {dropdowns.firstDropdown ? (
              <BiChevronUp size={25} />
            ) : (
              <BiChevronDown size={25} />
            )}
          </div>
          <div
            className={`${dropdowns.firstDropdown ? "block" : "hidden"} py-4`}
          >
            <p className="text-[13px]  leading-7 tracking-tight text-pretty ">
              در وب سایت روی گزینه &quot;ثبت نام &quot; کلیک کنید.
              <br /> میتوانید با استفاده از شماره موبایل ثبت نام خود را انجام
              دهید. (کد فعال سازی برایتان پیامک میشود .) بعد از وارد نمودن کد
              فعالسازی ، ثبت نام انجام می شود. سپس روی گزینه تکمیل اطلاعات کلیک
              و اطلاعات خود را تکمیل نمایید.
            </p>
          </div>
        </div>
        <div className="px-3 border rounded-md m-2">
          <div
            onClick={() =>
              setDropdowns({
                ...dropdowns,
                secondDropdown: !dropdowns.secondDropdown,
              })
            }
            className={`flex items-center justify-between cursor-pointer ${
              dropdowns.secondDropdown && "border-b"
            } pt-3 pb-8`}
          >
            <p className="text-[16px] fontBold ">
              چطور در دیجی کالا سفارش خود را ثبت کنم ؟
            </p>
            {dropdowns.secondDropdown ? (
              <BiChevronUp size={25} />
            ) : (
              <BiChevronDown size={25} />
            )}
          </div>
          <div
            className={`${dropdowns.secondDropdown ? "block" : "hidden"} py-4`}
          >
            <p className="text-[15px]  leading-9 tracking-tight text-pretty ">
              بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید
              ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از
              اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.
            </p>
          </div>
        </div>
        <div className="px-3 border rounded-md m-2">
          <div
            onClick={() =>
              setDropdowns({
                ...dropdowns,
                thirdDropdown: !dropdowns.thirdDropdown,
              })
            }
            className={`flex items-center justify-between cursor-pointer ${
              dropdowns.thirdDropdown && "border-b"
            } pt-3 pb-8`}
          >
            <p className="text-[15px] fontBold text-wrap leading-8">
              کالایی را که در طرح پیشنهاد شگفت انگیز
              <br /> می باشد می توان با تعداد بیش از یک عدد خریداری کرد؟
            </p>
            {dropdowns.thirdDropdown ? (
              <BiChevronUp size={30} />
            ) : (
              <BiChevronDown size={30} />
            )}
          </div>
          <div
            className={`${dropdowns.thirdDropdown ? "block" : "hidden"} py-4`}
          >
            <p className="text-[15px]  leading-9 tracking-tight text-pretty ">
              به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،
              دیجی‌کالا تعهدی در قبال سفارش‏‌های تعدادی ندارد و در صورتی که
              امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم با
              مشتری انجام خواهد شد.
            </p>
          </div>
        </div>
        <div className="text-[14px] fontBold text-center mt-6 mb-8">
          <p>جواب سوالتون رو پیدا نکردید؟</p>
          <button className="flex-center mx-auto m-2 py-3 px-3 bg-digiFixedCustomerServiceButton text-white  rounded-3xl">
            گفتگو با پشتیبان آنلاین
            <BiChevronLeft size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerServiceModal;
