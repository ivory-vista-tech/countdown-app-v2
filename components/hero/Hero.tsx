"use client";

import React from "react";

const Hero = () => {
  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <div className="h-[303px] w-full rounded-lg bg-hero bg-cover bg-center hidden xl:block">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <p className="text-lg font-medium lg:text-2xl">{date}</p>
      </div>
    </div>
  );
};

export default Hero;
