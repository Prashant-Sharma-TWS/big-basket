import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCarts from "../Admin/AdminCarts";
import AdminHome from "../Admin/AdminHome";
import AdminUserCart from "../Admin/AdminUserCart";
import AdminUsers from "../Admin/AdminUsers";
import { Error } from "../Elements/Element";
import CategoryWiseProducts from "../Pages/CategoryWiseProducts";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />
        <Route path="/*" element={<Error>404 Not Found</Error>} />
      </Routes>
    </>
  );
};
