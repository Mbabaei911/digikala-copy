import React, { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import LocationModalData from "./locationModalData";
import { FaChevronLeft } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
function LocationModal({
  handleLocationModal,
  handleProvinceChange,
  handleCityChange,
  Location,
  handleGoBack,

  handleGeolocation,
}) {
  const getLocation = async () => {
    await fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const ipAddress = data.ip;
        // Now you can use the ipAddress to make a request to ip-api.com
        fetch(`http://ip-api.com/json/${ipAddress}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            handleGeolocation(data.regionName, data.city);
            handleLocationModal(false);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  const renderedContent = () => {
    if (Location.province) {
      const findingCities = LocationModalData().filter((item) => {
        return item.province === Location.province;
      });

      const renderCities = findingCities[0].cities.map((item) => {
        return (
          <div
            className="text-[15px] py-2 flex items-center justify-between border-b border-gray-200 text-gray-700 cursor-pointer  hover:bg-gray-50 "
            onClick={() => {
              handleCityChange(item), handleLocationModal(false);
            }}
            key={Math.random()}
          >
            {item}
            <FaChevronLeft size={14} />
          </div>
        );
      });

      return (
        <div className="overflow-y-scroll h-[66vh] pl-2 province-scroll">
          <div
            onClick={handleGoBack}
            className="py-3 flex items-center text-digiBlue"
          >
            <GrLinkNext className=" cursor-pointer" size={25} />
            <p className="mr-2 text-[14px] cursor-pointer fontBold">
              بازگشت به لیست استان ها
            </p>
          </div>
          {renderCities}
        </div>
      );
    } else if (!Location.province) {
      const renderProvinces = LocationModalData().map((item) => {
        return (
          <div
            onClick={() => handleProvinceChange(item.province)}
            className="text-[15px] py-2 flex items-center justify-between border-b border-gray-200 text-gray-700 cursor-pointer  hover:bg-gray-50"
            key={item.province}
          >
            <p>{item.province}</p>
            <FaChevronLeft size={14} />
          </div>
        );
      });
      return (
        <div className="overflow-y-scroll h-[66vh] pl-2 province-scroll">
          <div
            onClick={getLocation}
            className="py-3 flex items-center text-digiBlue"
          >
            <BiCurrentLocation className=" cursor-pointer" size={25} />
            <p className="mr-2 text-[14px] cursor-pointer fontBold">
              مکان یابی خودکار
            </p>
          </div>
          <div>{renderProvinces}</div>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-black/40 w-screen h-screen fixed z-[60]  flex-center max-lg:hidden "
      onClick={() => handleLocationModal(false)}
      onScroll={(e) => {
        e.preventDefault();
        document.body.classList.add("no-scroll");
      }}
     
    >
      <div
        className="top-20 bg-white w-[430px] border h-[75vh] py-4 px-3 rounded z-[55] fixed"
        onClick={(e) => e.stopPropagation()}
     
       
      >
        <div className="">
          <div className="flex justify-between items-center border-b-2 pb-2">
            <p className="text-[15px] fontBold">انتخاب شهر</p>
            <IoClose
              className="cursor-pointer"
              size={20}
              onClick={() => {
                handleLocationModal(false);
              }}
            />
          </div>
          {renderedContent()}
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
