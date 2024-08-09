import React, { Fragment, useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../styles/globals.css";
import NavbarSearchbarMobile from "@/components/navbarSearchbarMobile";

const MyApp = ({ Component, pageProps }) => {
  //////////////
  ////all the modals states in one place
  const [modals, setModals] = useState({
    searchModal: false,
    productGroupModal: false,
    registerModal: false,
    amazingSectionModal: false,
    locationModal: false,
    supermarketOpen: false,
    customerServiceModal: false,
    supermarketModal: false,
    supermarketModalUp: true,
  });
  console.log(modals.customerServiceModal);

   
  //////////////
  ////end of all the modals states in one place

  ///////////
  ////making body not scrollable when modals are on
  useEffect(() => {
    if (modals.supermarketModal) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.paddingRight = "0px";
    } else if (
      modals.amazingSectionModal ||
      modals.locationModal ||
      modals.registerModal ||
      modals.productGroupModal ||
      modals.searchModal
    ) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.paddingRight = "0px";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [modals]);
  ///////////
  ////end of making body not scrollable when modals are on

  ///////////making navbar hide or show with scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= 1200) {
        setModals({ ...modals, supermarketOpen: true });
      } else {
        setModals({ ...modals, supermarketOpen: false });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modals, setModals]);
  ///////////
  ////end of making navbar hide or show with scroll///////////

  return (
    <Fragment>
      <Navbar modals={modals} setModals={setModals} />
      <NavbarSearchbarMobile modals={modals} setModals={setModals} />

      <Component modals={modals} setModals={setModals} {...pageProps} />
      <Footer />
    </Fragment>
  );
};

export default MyApp;
