import React, { Fragment, useRef } from "react";
import Image from "next/image";
function RegisterModal({ showRegisterModal, handleRegisterModal }) {
  const inputRef = useRef(null);
  function handleClick() {
    // Access the input value
    const inputValue = inputRef.current.value;
    // Focus the input
    inputRef.current.focus();
    console.log(inputValue);

    if (inputValue.length === 0) {
      document.getElementById("errorMessage").style.display = "block";
    } else {
      document.getElementById("errorMessage").style.display = "none";
    }
  }

  return (
    <Fragment>
      <div className="w-screen h-screen bg-white fixed  flex items-center max-lg:hidden justify-center z-[41]">
        <div
          onClick={() => {
            handleRegisterModal(false);
          }}
          className="w-screen h-screen  absolute z-[38]"
        ></div>
        <div className="h-[450px] w-[430px] z-[40]  shadow rounded  border  p-5">
          <div className="  w-full h-full space-y-3">
            <div className="flex-center ">
              <Image
                src={"/images/logoEnglish.svg"}
                height={100}
                width={150}
                alt="logo english"
              ></Image>
            </div>
            <div>
              <p className="fontBold flex tracking-tight">
                ورود
                <span className="bg-black w-[2px] my-[3px] mx-[10px] h-[22px] " />{" "}
                ثبت نام
              </p>
            </div>
            <div className="text-[13px] leading-5 text-gray-600">
              <p>
                سلام!
                <br />
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
              </p>
            </div>
            <div>
              <input
                ref={inputRef}
                className="w-full ps-2 py-2 text-gray-600 focus-within:outline-blue-200 border rounded border-gray-300"
                autoFocus
              ></input>

              <p
                className="py-2 text-[13px] text-red-700 hidden "
                id="errorMessage"
              >
                لطفا این قسمت را خالی نگذارید
              </p>
            </div>
            <div className="py-3">
              <button
                onClick={handleClick}
                className="bg-[#ef4056] hover:bg-red-500 text-white w-full py-2 rounded text-sm"
              >
                ورود
              </button>
            </div>
            <div>
              <p className="text-[12px] text-gray-600">
                ورود شما به معنای پذیرش{" "}
                <a className="cursor-pointer text-blue-400">شرایط دیجی کالا</a>{" "}
                و
                <a className="cursor-pointer text-blue-400">
                  {" "}
                  قوانین حریم خصوصی{" "}
                </a>
                است
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterModal;
