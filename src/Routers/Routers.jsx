import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "../Elements/NavbarElement";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error>404 Not Found</Error>} />
      </Routes>
    </>
  );
};
