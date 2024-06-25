import React, { Fragment } from "react";
import StoriesSection from "@/components/storiesComponent";
import SlidersComponent from "@/components/sliders";

function HomePage() {
  return (
    <Fragment>
      <StoriesSection />
      <SlidersComponent />
    </Fragment>
  );
}

export default HomePage;
