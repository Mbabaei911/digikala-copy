import React, { Fragment, useRef, useEffect } from "react";
import { FaFireAlt } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { SlMagnifier } from "react-icons/sl";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function NavbarModal({ handleModal, showModal }) {
  ///////////
  ////data for showing results of searches should come from the server
  const recentSearch = ["خوشبو کننده ماشین", "مانیتور", "اسباب بازی چرخ خیاطی"];
  const hotSearch = [
    "  لوازم کامپیوتر",
    "میکروفون بویا",
    "سامسونگ s22 ultra ",
    "جامدادی فانتزی",
    "شلوارک جین",
    "خودکار",
    "گوشی",
    "دریل",
  ];
  const renderedRecentSearch = () => {
    return recentSearch.map((item) => {
      return (
        <a key={item}>
          <div className="cursor-pointer flex justify-center items-center border-gray-300 bg-white border px-2 py-2 mx-1 my-1 rounded-full ">
            <p className="text-[13px] ml-1 fontBold  text-gray-700 ">{item}</p>
            <FaLessThan size={12} />
          </div>
        </a>
      );
    });
  };
  const renderedHotSearch = () => {
    return hotSearch.map((item) => {
      return (
        <a key={item}>
          <div className="cursor-pointer flex justify-center items-center border-gray-300 bg-white border px-2 py-2 mx-1 my-1 rounded-full ">
            <p className="text-[13px] ml-1 fontBold  text-gray-700 ">{item}</p>
            <FaLessThan className="text-gray-700" size={12} />
          </div>
        </a>
      );
    });
  };

  /////////////////
  ///closing navbar button
  const recentSearchDiv = useRef(null);
  const deleteButtonClick = () => {
    recentSearchDiv.current.style.display = "none";
  };

  useEffect(() => {
    const closingButton = document.getElementById("deleteButton");
    closingButton.addEventListener("click", deleteButtonClick);
    return () => {
      closingButton.removeEventListener("click", deleteButtonClick);
    };
  }, []);

  ////////////
  ///on scroll button function

  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const scrollLeftButton = document.querySelector(".scroll-button.left");
    const scrollRightButton = document.querySelector(".scroll-button.right");
    // Check if content is scrolled to the left
    
    const handleScroll = () => {
      if (container.scrollLeft === 0) {
        scrollRightButton.style.display = "none"; // hide right button
      } else {
        scrollRightButton.style.display = "block"; // hide right button
      }
      // Check if content is scrolled to the left
      if (
        container.scrollLeft ===
        container.clientWidth - container.scrollWidth
      ) {
        scrollLeftButton.style.display = "none"; // hide left button
      } else {
        scrollLeftButton.style.display = "block"; // show left button
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
/////////////
////






  /////////////
  ////JSX
  return (
    <Fragment>
      <div
        className={`bg-black/60 w-screen h-screen absolute z-30 lg:hidden ${
          showModal ? "dark-bg-first" : "dark-bg-second "
        }`}
      ></div>

      <div
        className={`h-screen w-screen px-3 py-3 fixed bg-white border-[e63f66] z-40 overflow-hidden  lg:hidden 
             ${showModal ? "animate1 " : " animate2"} 
          `}
      >
        <div className="">
          <div className=" w-full flex py-1 border-b border-[#19bfd3] ">
            <button
              onClick={() => {
                handleModal(false);
              }}
            >
              <GrFormNextLink size={30} className="ml-1" />
            </button>
            <input
              placeholder="جستجو"
              className="w-full text-[14px] px-2 focus:outline-blue-200 text-gray-400"
              type="text"
              autoFocus
            />
          </div>
          <div
            ref={recentSearchDiv}
            className="  px-3 pt-5  border-b border-gray-200"
          >
            <div className="flex  justify-between ">
              <div className="flex space-x-10 justify-center items-center">
                <div className="ml-3">
                  <AiOutlineClockCircle className="text-blue-400" size={25} />
                </div>
                <div>
                  <p className="text-[14px] fontBold text-gray-600">
                    آخرین جستجو های شما
                  </p>
                </div>
              </div>
              <div id="deleteButton">
                <BiTrash className="text-red-600 cursor-pointer" size={25} />
              </div>
            </div>
            <div className="py-4 px-2 ">
              <div className="flex justify-center flex-wrap">
                {renderedRecentSearch()}
              </div>
            </div>
          </div>
          <div className="  px-3 pt-5 ">
            <div className="flex  justify-between ">
              <div className="flex space-x-10 items-center">
                <div className="ml-3">
                  <FaFireAlt className="text-red-400" size={25} />
                </div>
                <div>
                  <p className="text-[14px] fontBold text-gray-600">
                    جستجو های پرطرفدار
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 px-2 ">
              <div className="flex justify-center items-center flex-wrap ">
                {renderedHotSearch()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      //////////
      /////second modal */}
      <div
        onClick={() => {
          handleModal(false);
        }}
        className="bg-black/40 w-screen h-screen absolute z-[-1]  max-lg:hidden"
      ></div>

     
      <div className="absolute w-[610px] xl:w-[700px] h-[425px] xl:h-[460px] rounded-md  bg-white  top-[73px] right-[145px] max-lg:hidden z-40 border shadow">
        <div className=" flex px-3">
          <SlMagnifier
            size={20}
            className="absolute right-[15px] mt-2 text-gray-800 "
          />
          <input
            type="text "
            placeholder="جستجو"
            className="pr-7 py-2 mt-[1px]  text-[14px]  w-[610px] xl:w-[700px] border-b focus-within:outline-none border-blue-600 text-gray-400 "
            autoFocus
          />
        </div>
        <div className="flex justify-center items-center mt-4 px-3">
          <Image
            className="w-full rounded-md h-auto"
            src={"/images/searchbar-image.gif"}
            width={570}
            alt="searchbar-image"
            height={140}
          />
        </div>
        <div className="px-3 py-2 flex items-center ">
          <FaFireAlt className="text-red-400" size={25} />
          <p className="fontBold text-gray-800 text-[16px] mr-3">
            جستجو های پرطرفدار
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex items-center justify-start overflow-y-auto text-nowrap  py-2 px-3  "
        >
          {renderedHotSearch()}
        </div>
        <div className="flex items-center ">
          <button
            onClick={handleScrollRight}
            className={`text-gray-500  focus:outline-none focus:shadow-outline-blue ml-2 absolute bottom-[26px] right-4 rounded-full border-2 p-2 hover:bg-[#e5013a] hover:text-white scroll-button right bg-white`}
          >
            <AiOutlineRight size={20} />
          </button>
          <button
            onClick={handleScrollLeft}
            className="text-gray-500  focus:outline-none focus:shadow-outline-blue  bg-white rounded-full border-2 p-2 left-4 absolute bottom-[26px] hover:bg-[#e5013a] hover:text-white scroll-button left"
          >
            <AiOutlineLeft size={20} />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default NavbarModal;