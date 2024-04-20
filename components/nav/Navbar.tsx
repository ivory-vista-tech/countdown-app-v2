"use client";

import React from "react";
import ModeToggle from "../modeToggle/ModeToggle";
import MobileNav from "./MobileNav";
import BrandIcon from "./BrandIcon";

const Navbar = () => {
  return (
    <nav className="relative mx-auto flex h-16 w-full items-center border-y bg-dark-1 px-4 py-8 backdrop-blur-lg dark:opacity-75">
      <div className="flex-1">
        <BrandIcon />
      </div>

      <ModeToggle />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
