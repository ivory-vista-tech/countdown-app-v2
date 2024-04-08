"use client";

import { DataContext } from "@/providers/DataProvider";
import Image from "next/image";
import { useContext } from "react";

const BrandIcon = () => {
  const { setFeature } = useContext(DataContext);

  return (
    <div
      className="flex flex-row items-center font-normal text-2xl text-white cursor-pointer"
      onClick={() => setFeature("home")}
    >
      <Image src="/logo512.png" alt="Logo" height={50} width={50} priority />
      Aeon<span className="text-primary">Timer</span>
    </div>
  );
};

export default BrandIcon;
