import React, { Fragment } from "react";
import StoriesSection from "@/components/storiesComponent";
import SlidersComponent from "@/components/sliders";
import AmazingSection from "@/components/amazingSection";

function HomePage() {
  return (
    <Fragment>
      <StoriesSection />
      <SlidersComponent />
      <AmazingSection/>
    </Fragment>
  );
}

export default HomePage;
