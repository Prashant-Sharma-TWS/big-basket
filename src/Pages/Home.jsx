import React from "react";
// import { Offers } from "../Components/Home/Offers";
import {
  ViewportBottomSlider,
  ViewportSlider,
} from "../Components/Home/ViewportSlider";

export const Home = () => {
  return (
    <>
      <ViewportSlider />
      <ViewportBottomSlider />
      {/* <Offers /> */}
    </>
  );
};
