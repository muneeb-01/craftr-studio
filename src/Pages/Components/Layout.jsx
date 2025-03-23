import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
const Layout = () => {
  return (
    <>
    <div className="relative overflow-x-hidden w-full h-full">
     <CustomCursor />
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
    </>
  );
};

export default Layout;
