import React, { Fragment, useState } from "react";
import StoriesSection from "@/components/storiesComponent";
import SlidersComponent from "@/components/sliders";
import AmazingSection from "@/components/amazingSection";

function HomePage({modals,setModals}) {
  
  return (
    <Fragment>
      <StoriesSection />
      <SlidersComponent />
      <AmazingSection modals={ modals} setModals={setModals} />
    </Fragment>
  );
}

export default HomePage;
