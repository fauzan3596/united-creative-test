import React from "react";
import Button from "./Button";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-[#04070d] xl:h-[123px] lg:h-[96px] lg:px-16 px-5">
          <div className="flex-none">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                className="xl:h-17 xl:w-17 h-14 w-14 object-cover"
              />
            </Link>
          </div>
          <div className="flex-1">
            <ul className="sm:flex hidden gap-7.5 leading-[18.75px] pl-8">
              <li>
                <Link>Pasar</Link>
              </li>
              <li>
                <Link>Tentang Kami</Link>
              </li>
              <li>
                <Link>Kontak Kami</Link>
              </li>
            </ul>
          </div>
          <div className="flex-none sm:flex hidden items-center gap-6">
            <Button text={"SIGN IN"} />
            <Button text={"SIGN UP"} />
          </div>
          <div className="flex-none sm:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <SideNav />
    </nav>
  );
};

export default Navbar;
