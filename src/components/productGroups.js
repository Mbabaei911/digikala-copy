import { FaLessThan } from "react-icons/fa";
import React, { Fragment, useState } from "react";
import { GiMilkCarton } from "react-icons/gi";
import { BiCreditCard } from "react-icons/bi";
import { GiCampingTent } from "react-icons/gi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import { GiNecklaceDisplay } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiSofa } from "react-icons/gi";
import { CiLaptop } from "react-icons/ci";
import { GiPencilRuler } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import { SlWrench } from "react-icons/sl";
import { IoCarSportOutline } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";
import ProductModalData from "./productModalData";
function ProductGroups({ handleDropdownModal, showDropdown }) {
  ////////////////
  ////rendering side menu
  //////////
  ///keep tracking hover side menu
  const [hoveredItem, setHoveredItem] = useState(ProductModalData()[0]); // State for hovered item ID
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  //////////
  /////
  const renderedSideMenu = ProductModalData().map((item) => {
    return (
      <div
        key={item.id}
        className="flex items-center hover:bg-white hover:shadow-sm hover:text-digiRed cursor-pointer py-3 text-gray-600"
        onMouseEnter={() => handleMouseEnter(item)}
      >
        <div className="pr-2">{item.logo}</div>
        <div className=" mr-2 text-[13px] fontBold  ">{item.title}</div>
      </div>
    );
  });

  const renderedDetailMenu = () => {
    return (
      <div className="p-4 ">
        <div>
          <p className="text-nowrap text-[14px] fontBold text-digiBlue">
            همه محصولات {hoveredItem.title}
          </p>
        </div>
        <div className="px-2 py-4  ">
          <div className=" lg:h-[65vh]   2xl:h-[68vh]   w-[60vw]     overflow-y-scroll    ">
            <div
              className={`  flex flex-col flex-wrap  w-full h-[90vh] ${
                hoveredItem.id === 6 && "2xl:h-[150vh] lg:h-[230vh]"
              } ${hoveredItem.id === 3 && "2xl:h-[120vh] lg:h-[200vh]"} ${
                hoveredItem.id === 4 && "2xl:h-[120vh] lg:h-[190vh]"
              }    ${hoveredItem.id === 7 && "2xl:h-[120vh] lg:h-[185vh]"}  ${
                hoveredItem.id === 9 && "2xl:h-[60vh] lg:h-[50vh]"
              } ${hoveredItem.id === 12 && "2xl:h-[100vh] lg:h-[165vh]"}  ${
                hoveredItem.id === 1 && "lg:h-[175vh]"
              }`}
            >
              {hoveredItem.detailMenu.map((detailMenuItem) => (
                <div
                  key={detailMenuItem.title}
                  className="bg-yellow-10  flex-auto h-fit break-inside-avoid-column  mx-2 "
                >
                  <div className="flex items-center bg-yellow-20 hover:text-digiBlue">
                    <span className="fontBold ml-1 text-[16px] text-nowrap  cursor-pointer border-r-[2px] border-digiRed/70 px-1 ">
                      {detailMenuItem.title}
                    </span>
                    <FaLessThan size={10} />
                  </div>
                  <div className="text-gray-400 text-[13px] py-2 h-auto bg-yellow-30">
                    {detailMenuItem.items.map((item) => (
                      <li
                        className="py-1 cursor-pointer hover:text-digiRed bg-yello-400 ml-2 list-none"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
   

      <div
        onMouseEnter={() => handleDropdownModal(true)}
        onMouseLeave={() => handleDropdownModal(false)}
        className="slide-down-anim    pt-[8px] absolute   flex"
      >
        <div className=" flex ">
          <div className="w-52 bg-gray-100 rounded-r-sm ">
            {renderedSideMenu}
          </div>

          <div className="bg-gray-50 rounded-l-sm ">{renderedDetailMenu()}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductGroups;
