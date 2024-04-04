"use client";

import React, { useContext } from "react";
import SetCountdown from "../buttons/SetCountdown";
import SetMessage from "../buttons/SetMessage";
import ToggleTimeFormat from "../buttons/ToggleTimeFormat";
import ButtonGroup from "../buttons/ButtonGroup";
import { DataContext } from "@/providers/DataProvider";

const Controls = () => {
  const { feature } = useContext(DataContext);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-screen mx-[4px] md:mx-[40px] lg:mx-[100px] h-[100px]">
      <div className="flex flex-1">
        {feature === "countdown" && <SetCountdown />}
        {feature === "message" && <SetMessage />}
        {feature === "time" && <ToggleTimeFormat />}
      </div>

      <div className="flex">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default Controls;
