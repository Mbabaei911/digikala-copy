import { BiChevronUp } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import React, { Fragment ,useEffect} from "react";
import Image from "next/image";


function ReadableSection() {
  ///////
  //data for readable section
  const readableSectionData = [
    {
      id: 1,
      title: "طرز تهیه ماش پلو با گوشت چرخ کرده + ترفند های مهم",
      src: "/images/readable-images/readable-image (1).jpg",
    },
    {
      id: 2,
      title: "علت آلرژی در فصل تابستان چیست و چه علائم آزاردهنده ای دارد؟",
      src: "/images/readable-images/readable-image (2).jpg",
    },
    {
      id: 3,
      title: "4دلیل برای خریدن گلکسی زد فلیپ 6(و 3 دلیل برای نخریدن)",
      src: "/images/readable-images/readable-image (3).jpg",
    },
    {
      id: 4,
      title: "هرآنچه باید درباره فیلم«پیکی بلایندرز»بدانید",
      src: "/images/readable-images/readable-image (4).jpg",
    },
  ];
  ///////////
  ///make scroll to top

  function scrollToTop() { 
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
  ///////
  //end of data for readable section
  return (
    <Fragment>
      <div className="2xl:w-[75%] 2xl:mx-auto mt-1">
        <div className="py-4 max-lg:px-4">
          <div className="flex items-center justify-between  ">
            <div className="flex items-center  ">
              <p className="tracking-tighter fontBold ">خواندنی ها </p>
            </div>
            <div className="flex items-center text-digiBlue cursor-pointer ">
              <p className=" text-[13px] fontBold  ">
                مطالب بیشتر در دیجی کالا مگ
              </p>
              <BiChevronLeft size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-2 lg:grid-cols-4">
            {readableSectionData.map((item) => {
              return (
                <div
                  className="border rounded-md max-md:my-3  cursor-pointer"
                  key={item.id}
                >
                  <Image
                    src={item.src}
                    alt="readable image"
                    width={200}
                    height={200}
                    unoptimized
                    className="w-full rounded-t-md"
                  ></Image>
                  <div className="my-3 pr-3 pb-2">
                    <p className="text-[12px]">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
         onClick = { scrollToTop }
            className="lg:hidden flex items-center justify-center mt-4 text-digiBlue cursor-pointer "
          >
            <p className=" text-[13px] fontBold  ">بازگشت به بالا</p>
            <BiChevronUp size={20} />
          </button>
        </div>
      </div>
      <div className="w-screen h-[1px] bg-gray-200 mb-3"></div>
    </Fragment>
  );
}

export default ReadableSection;
