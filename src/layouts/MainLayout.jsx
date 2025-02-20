import React from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-[Roboto]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
