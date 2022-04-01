import React from "react";
import { Route, Routes } from "react-router-dom";
import { SingleProduct } from "../Components/productPages/SingleProduct";
import { Error } from "../Elements/Element";
import CategoryWiseProducts from "../Pages/CategoryWiseProducts";
import { Checkout } from "../Pages/Checkout";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />
        <Route path="/cl/:category" element={<CategoryWiseProducts />} />
        <Route path="/cl/*" element={<Error>404 Not Found</Error>} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/*" element={<Error>404 Not Found</Error>} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </>
  );
};
