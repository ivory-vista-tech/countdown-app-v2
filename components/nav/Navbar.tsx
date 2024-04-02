import Link from "next/link";
import React from "react";
import ModeToggle from "../modeToggle/ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto px-4 py-10 h-[60px] bg-red-500">
      <Link href="/" className="flex flex-row items-center font-bold text-3xl">
        <Image src="/logo512.png" alt="Logo" height={50} width={50} />
        Aeon<span className="text-primary">Timer</span>
      </Link>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
