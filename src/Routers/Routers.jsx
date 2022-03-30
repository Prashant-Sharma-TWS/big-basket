import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "../Elements/Element";
import CategoryWiseProducts from "../Pages/CategoryWiseProducts";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />
        <Route path="/cl/:category" element={<CategoryWiseProducts />} />
        <Route path="/*" element={<Error>404 Not Found</Error>} />
      </Routes>
    </>
  );
};
