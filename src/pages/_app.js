import React, { Fragment, useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  //////////////
  ////all the modals states in one place
  const [modals, setModals] = useState({
    searchModal: false,
    productGroupModal: false,
    registerModal: false,
    amazingSectionModal: false,
    locationModal: false,
  });
  console.log(modals);

  //////////////
  ////end of all the modals states in one place


  
  ///////////
  ////making body not scrollable when modals are on
  useEffect(() => {
    if (
      modals.amazingSectionModal ||
      modals.locationModal ||
      modals.registerModal ||
      modals.productGroupModal||modals.searchModal
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

  return (
    <Fragment>
      <Navbar modals={modals} setModals={setModals} />
      <Component modals={modals} setModals={setModals} {...pageProps} />

      {/* <Footer /> */}
    </Fragment>
  );
};

export default MyApp;
