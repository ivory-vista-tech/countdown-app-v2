"use client";

import { DataContext } from "@/providers/DataProvider";
import Image from "next/image";
import { useContext } from "react";

const BrandIcon = () => {
  const { setFeature } = useContext(DataContext);

  return (
    <section>
      <div
        className="flex flex-row items-center font-normal text-xl text-white cursor-pointer w-fit"
        onClick={() => setFeature("home")}
      >
        <Image src="/logo512.png" alt="Logo" height={40} width={40} priority />
        Aeon<span className="text-primary">Timer</span>
      </div>
    </section>
  );
};

export default BrandIcon;
