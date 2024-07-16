import React, { useRef, useEffect, useState, Fragment } from "react";
import Image from "next/image";
import NavbarSearchModal from "./navbarSearchModal";
import RegisterModal from "./registerModal";
import ProductGroups from "./productGroups";
import LocationModal from "./locationModal.js";
import { MdLocationPin } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { BsFillBasket2Fill } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxEnter } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { SlMagnifier } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { GrAppleAppStore } from "react-icons/gr";
import { FaFireAlt } from "react-icons/fa";

function Navbar({ modals, setModals }) {
  /////////////////
  ///closing navbar button
  const navbarContentRef = useRef(null);
  const closingButtonClick = () => {
    navbarContentRef.current.style.display = "none";
  };

  useEffect(() => {
    const closingButton = document.getElementById("closingNavbar");
    closingButton.addEventListener("click", closingButtonClick);
    return () => {
      closingButton.removeEventListener("click", closingButtonClick);
    };
  }, []);

  ///////////////
  ////Navbar search Modal

  // const handleForClosingSearchNavbarModal = () => {
  //   if (modals.searchModal) {
  //     handleSearchModal(false);
  //   }
  // };
  ////////////////
  ///register Modal

  // const handleRegisterModal = (x) => {
  //   setModals({ ...modals, registerModal: x });
  // };
  ////////////////
  ///dropdown Modal
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleProductGroupModal = (x) => {
  //   setModals({ ...modals, productGroupModal: x });
  // };

  /////////////
  ///
  const handleNavbarClickForSearchModal = () => {
    if (modals.searchModal) {
      setModals({...modals,searchModal:false})
    }
  }

  ///////////
  ////location modal

  const handleLocationModal = (x) => {
    setModals({ ...modals, locationModal: x });
  };

  /////state for getting location
  const [Location, setLocation] = useState({
    province: null,
    city: null,
    geolocationProvince: null,
    geolocationCity: null,
  });
  const handleProvinceChange = (province) => {
    setLocation({ ...Location, province: province });
  };
  const handleCityChange = (city) => {
    setLocation({ ...Location, city: city });
  };
  const handleGeolocation = (geoProvince, geoCity) => {
    setLocation({
      ...Location,
      geolocationProvince: geoProvince,
      geolocationCity: geoCity,
    });
  };
  const handleGoBack = () => {
    setLocation({ province: null, city: null });
  };

  ////
  ///render for showing location
  const locationShowRendering = () => {
    if (Location.city && Location.province) {
      return `ارسال به ${Location.province}، ${Location.city}`;
    } else if (Location.geolocationProvince && Location.geolocationCity) {
      return `ارسال به ${Location.geolocationProvince}، ${Location.geolocationCity}`;
    } else {
      return "لطفا شهر خود را انتخاب کنید";
    }
  };

  //////////////
  ///JSX

  return (
    <Fragment>
      {/* making register modal */}
      {modals.registerModal && (
        <RegisterModal modals={modals} setModals={setModals} />
      )}
      {/*end of  making register modal */}

      {/* making location modal  and showing */}
      {modals.locationModal && (
        <LocationModal
          handleLocationModal={handleLocationModal}
          handleProvinceChange={handleProvinceChange}
          handleCityChange={handleCityChange}
          Location={Location}
          handleGoBack={handleGoBack}
          handleGeolocation={handleGeolocation}
        ></LocationModal>
      )}
      {/*end of making location modal  and showing */}

      {/* making navbar search modal for mobile version */}

      <div className="lg:hidden">
        {modals.searchModal && (
          <NavbarSearchModal setModals={setModals} modals={modals} />
        )}
      </div>
      {/* end of navbar search modal for mobile version */}

      {/* section for downloading ios app */}
      <div className="z-50 " onClick={handleNavbarClickForSearchModal}>
        <div className="bg-digiRed w-screen text-white  h-8 flex justify-center lg:h-12  ">
          <div
            className="flex
         justify-center items-center"
          >
            <span className="text-xs fontMedium lg:fontBold lg:text-lg">
              برای آیفون بازها |
            </span>
            <div className="  flex justify-center items-center">
              <p className="mr-1 lg:text-[17px] text-[12px] fontRegular lg:fontMedium">
                نسخه ios دیجی کالا در اپ استور
              </p>
              <GrAppleAppStore
                size={15}
                className="mr-1 fill-white bg-blue-500 rounded-[3px]"
              />
            </div>
          </div>
        </div>
        {/* end of section for downloading ios app */}

        {/* just in mobile  */}
        <div
          className="p-2 flex max-lg:flex-wrap justify-between border-b-[1px] lg:hidden drop-shadow z-0"
          ref={navbarContentRef}
        >
          <div className="flex items-center max-md:order-1 ">
            <button id="closingNavbar">
              <CgClose className="text-gray-400" size={20} />
            </button>
            <Image
              className="mx-2"
              alt="logo"
              src="/images/logoX.png"
              width={35}
              height={35}
              priority={true}
              unoptimized
            />
            <p className="fontBold text-[15px]">اپلیکیشن دیجی کالا</p>
          </div>

          <div
            className="flex items-center max-lg:order-3 w-screen py-2  bg-gray-100 rounded text-[15px]  fontRegular space-x-2 lg:w-[50%] max-lg:mt-2 cursor-pointer"
            onClick={() => {
              setModals({ ...modals, searchModal: true });
            }}
          >
            <button>
              <CgSearch size={25} className="mx-2 text-gray-400" />
            </button>
            <p className="text-gray-500 text-[14px]">جستجو در </p>
            <Image
              src="/images/digi.svg"
              alt="digi write"
              height={40}
              width={90}
              priority={true}
            />
          </div>
          <div className="max-lg:order-2  flex  ">
            <button className="bg-black hover:bg-gray-800 px-3 text-white fontRegular rounded-lg text-[14px]">
              نصب
            </button>
          </div>
        </div>
        {/*end of just in mobile  */}

        {/* start just in desktop */}
        <div
          className="w-screen  z-20 "
          onClick={handleNavbarClickForSearchModal}
        >
          <div className="2xl:w-[90%] 2xl:mx-auto  h-12 px-3  flex justify-between  items-center max-lg:hidden  mb-5">
            <div className="flex w-full relative ">
              <Image
                src="/images/logoEnglish.svg"
                alt="digi writing english "
                height={60}
                width={110}
                className="cursor-pointer image-logoEnglish-size"
                priority={true}
              />
              <SlMagnifier
                size={20}
                className="absolute right-[150px] mt-2 text-gray-400  "
                onClick={() => {
                  setModals({ ...modals, searchModal: true });
                }}
              />

              <div
                className="pr-10 py-2 bg-red-100 mr-4 text-[14px] rounded w-[610px]   "
                onClick={() => {
                  setModals({ ...modals, searchModal: true });
                }}
              >
                <p className="text-gray-400">جستجو</p>
              </div>
              {modals.searchModal && (
                <NavbarSearchModal setModals={setModals} modals={modals} />
              )}
            </div>
            <div className="flex ">
              <button
                onClick={() => {
                  setModals({ ...modals, registerModal: true });
                }}
                className=" flex border py-2 px-3 rounded fontBold cursor-pointer"
              >
                <RxEnter size={20} priority="true" />
                <p className="text-[13px] text-nowrap pr-2">ورود | ثبت نام</p>
              </button>
              <div className="flex items-center">
                <span className="w-[2px] h-6 mx-2 bg-gray-200 "></span>
              </div>
              <div className="flex items-center px-2">
                <button>
                  <AiOutlineShoppingCart size={25} className="text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between max-lg:hidden pl-1  bg-yellow-00   2xl:mx-auto 2xl:w-[90%]">
            <div className="flex  items-center bg-blue-30 ">
              <div
                className=" py-2"
                onMouseEnter={() => {
                  setModals({
                    ...modals,
                    productGroupModal: true,
                    searchModal: false,
                  });
                }}
                onMouseLeave={() => {
                  setModals({
                    ...modals,
                    productGroupModal: false,
                  });
                }}
              >
                <div className="flex items-center px-3 cursor-pointer navbar-element ">
                  <GiHamburgerMenu size={15} />
                  <p className="text-[14px] font-bold mr-1  tracking-tight">
                    دسته بندی کالاها
                  </p>
                </div>
              </div>

              <div className="flex items-center border-x">
                <div className="flex px-2 items-center navbar-element">
                  <CiPercent
                    className="text-gray-500  cursor-pointer"
                    size={20}
                  />
                  <p className="text-[12px] fontBold text-gray-500 mr-1 cursor-pointer">
                    شگفت انگیزها
                  </p>
                </div>
                <div className="flex px-2 items-center navbar-element">
                  <BsFillBasket2Fill
                    className="text-gray-500 cursor-pointer"
                    size={17}
                  />
                  <p className="text-[12px] fontBold text-gray-500 mr-1 cursor-pointer">
                    سوپر مارکت
                  </p>
                </div>
                <div className="flex px-2 items-center navbar-element">
                  <BsCreditCard
                    className="text-gray-500 cursor-pointer"
                    size={17}
                  />
                  <p className="text-[12px] fontBold text-gray-500 mr-1 cursor-pointer">
                    کارت هدیه
                  </p>
                </div>
                <div className="flex px-2 items-center navbar-element">
                  <FaFireAlt
                    className="text-gray-500 cursor-pointer"
                    size={17}
                  />
                  <p className="text-[12px] fontBold text-gray-500 mr-1 cursor-pointer">
                    پرفروش ترین ها
                  </p>
                </div>
              </div>
              <div className="navbar-element py-2 ">
                <p className="text-[12px] fontBold text-gray-500 mr-2 cursor-pointer">
                  سوالی دارید؟
                </p>
              </div>
              <div className=" navbar-element py-2">
                <p className="text-[12px] fontBold text-gray-500 mr-2  cursor-pointer">
                  در دیجی کالا بفروشید!
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-center  "
              onClick={() => {
                handleLocationModal(true);
              }}
            >
              <MdLocationPin
                className="text-gray-500 cursor-pointer"
                size={17}
              />
              <div className="text-[12px] fontBold text-gray-700 mx-2 cursor-pointer relative group">
                {locationShowRendering()}
                <div className="tooltip bottom-0  p-2  text-white bg-digiDarkBlue rounded shadow-md absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block text-[12px] fontBold text-nowrap translate-y-9 z-50">
                  {locationShowRendering()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-[1px] bg-gray-300 "></div>
      </div>
      {/* black bg for product group modal */}
      {modals.productGroupModal && (
        <div
          onMouseEnter={() => {
            setModals({ ...modals, productGroupModal: true });
          }}
          className={` z-40  ${modals.productGroupModal ? "fixed" : "hidden"} `}
        >
          <ProductGroups setModals={setModals} modals={modals} />
        </div>
      )}
      {/*end of black bg for product group modal */}

      {/* black bg for search modal */}
      {modals.searchModal && (
        <div
          className="w-screen h-screen fixed  z-[30] bg-black/40"
          onClick={() => setModals({ ...modals, searchModal: false })}
        ></div>
      )}

      {/*end of black bg for search modal */}
    </Fragment>
  );
}

export default Navbar;
