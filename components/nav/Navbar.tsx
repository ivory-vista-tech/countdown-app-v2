import React from "react";
import ModeToggle from "../modeToggle/ModeToggle";
import MobileNav from "./MobileNav";
import BrandIcon from "./BrandIcon";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center mx-auto px-4 py-8 h-[50px] bg-dark-1 opacity-75 backdrop-blur-lg border-y">
      <div className="flex-1">
        <BrandIcon />
      </div>

      <ModeToggle />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
