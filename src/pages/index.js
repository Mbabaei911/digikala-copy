import React, { Fragment, useState } from "react";
import StoriesSection from "@/components/storiesComponent";
import SlidersComponent from "@/components/sliders";
import AmazingSection from "@/components/amazingSection";
import CategorySection from "@/components/categorySection";
import FavoriteSection from "@/components/favoriteSection";
import BestsellerSection from "@/components/bestsellerSection";
function HomePage({modals,setModals}) {
  
  return (
    <Fragment>
      <StoriesSection />
      <SlidersComponent />
      <AmazingSection modals={modals} setModals={setModals} />
      <CategorySection />
      <FavoriteSection />
      <BestsellerSection/>
    </Fragment>
  );
}

export default HomePage;
