import React, { useState } from "react";
import Image from "./Image";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="logo" w={32} h={32}></Image>
        <span>Free2Write</span>
      </div>
      {/* Destop menu */}
      <NavList className="hidden md:flex xl:gap-12"></NavList>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/** Mobile menu content */}
        <NavList
          className={`${
            open ? "-right-0" : "-right-[100%]"
          } absolute flex flex-col justify-center w-full h-screen gap-8 bg-primary  top-16 transition-all ease-in-out`}
        ></NavList>
      </div>
    </div>
  );
};

function NavList({ className = "" }) {
  return (
    <div className={`items-center font-medium ${className}`}>
      <a href="/">Home</a>
      <a href="/">Trending</a>
      <a href="/">Most popular</a>
      <a href="/">About</a>
      <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
        Login
      </button>
    </div>
  );
}

export default NavBar;
