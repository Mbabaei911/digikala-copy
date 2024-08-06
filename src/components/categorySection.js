import React, { useEffect } from "react";
import CategorySectionData from "./categorySectionData";
import Image from "next/image";
const CategorySection = () => {



  const renderInsideGrid = CategorySectionData().map((item) => {
    return (
      <div
        className=" cursor-pointer flex flex-center flex-col justify-center py-2"
        key={item.id}
      >
        <Image
          alt="product picture"
          src={item.src}
          width={80}
          height={80}
          unoptimized
        />
        <p className="text-[12px] fontBold pt-2">{item.title}</p>
      </div>
    );
  });

  return (
    <div className="2xl:w-[75%] mx-auto ">
      <div className="text-center fontBold text-[17px] my-2">
        <p>خرید بر اساس دسته بندی</p>
      </div>
      <div className="py-3 ">
        <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {renderInsideGrid}
        </div>
      </div>
      <div className=" lg:mx-auto ">
        <div className="p-4   max-lg:space-y-4 w-full   lg:flex lg:items-center lg:justify-center">
          <Image
            alt="category-banner"
            className="rounded-2xl lg:w-[50%]  ml-1 cursor-pointer"
            src={"/images/category-images/category-banner (1).webp"}
            height={1000}
            width={1000}
            unoptimized
          ></Image>
          <Image
            alt="category-banner"
            src={"/images/category-images/category-banner (2).webp"}
            height={1000}
            width={1000}
            className="rounded-2xl lg:w-[50%] mr-1 cursor-pointer"
            unoptimized
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
