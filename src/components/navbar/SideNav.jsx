import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-[#04070d] min-h-full w-full px-8 py-3 flex flex-col gap-7 items-center font-medium">
        <li className="self-end">
          <label
            htmlFor="my-drawer-3"
            className="text-white border-0 hover:border-0 text-xl font-bold"
          >
            ✕
          </label>
        </li>
        <li>
          <Link to="/">
            <img src="/logo.svg" alt="Test Crypto Logo" className="h-30 w-30" />
          </Link>
        </li>
        <li>
          <Link>Pasar</Link>
        </li>
        <li>
          <Link>Tentang Kami</Link>
        </li>
        <li>
          <Link>Kontak Kami</Link>
        </li>
        <li className="w-full">
          <Button text="SIGN UP" />
        </li>
        <li className="w-full">
          <Button text="SIGN IN" />
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
