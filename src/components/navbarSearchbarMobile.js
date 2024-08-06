import React from "react";
import Image from "next/image";
import { CgSearch } from "react-icons/cg";
function NavbarSearchbarMobile({modals,setModals}) {
  return (
    <div className="px-2 lg:hidden  pt-2 pb-3 border-b-[1px]  sticky top-0 z-20 bg-white">
      <div
        className="flex items-center  py-2 bg-gray-100 rounded-3xl text-[15px] fontRegular space-x-2   cursor-pointer  w-full    "
        onClick={() => {
          setModals({ ...modals, searchModal: true });
        }}
      >
        <button>
          <CgSearch size={20} className="ml-2 mr-3 text-gray-400" />
        </button>
        <p className="text-gray-400 text-[14px]">جستجو در </p>
        <Image
          src="/images/digi.svg"
          alt="digi write"
          height={40}
          width={80}
          priority={true}
          unoptimized
        />
      </div>
    </div>
  );
}

export default NavbarSearchbarMobile;
