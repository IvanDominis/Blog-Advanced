import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="logo" w={32} h={32}></Image>
        <span>Free2Write</span>
      </Link>
      {/* Destop menu */}
      <NavList className="hidden md:flex xl:gap-12">
        {" "}
        <SignedOut>
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavList>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className="text-4xl cursor-pointer"
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

function NavList({ className = "", children }) {
  return (
    <div className={`items-center font-medium ${className}`}>
      <Link to="/">Home</Link>
      <Link to="/">Trending</Link>
      <Link to="/">Most popular</Link>
      <Link to="/">About</Link>
      {children}
    </div>
  );
}

export default NavBar;
