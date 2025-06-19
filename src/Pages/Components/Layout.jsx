import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FollowCursor from "./FollowCursor";
const Layout = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div className="relative overflow-x-hidden w-full h-full">
        <FollowCursor />
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
        {!isMenu && (
          <>
            <Outlet /> <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
