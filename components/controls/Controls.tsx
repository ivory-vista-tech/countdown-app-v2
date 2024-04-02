import React from "react";
import { Box } from "@mui/material";
import SetCountdown from "../buttons/SetCountdown";
import SetMessage from "../buttons/SetMessage";
import ToggleTimeFormat from "../buttons/ToggleTimeFormat";
import ButtonGroup from "../buttons/ButtonGroup";

const Controls = () => {
  return (
    <div className="flex flex-row justify-center items-center max-w-screen mx-[4px] md:mx-[40px] lg:mx-[100px] h-[100px]">
      <div className="flex flex-1">
        <SetCountdown />
        <SetMessage />
        <ToggleTimeFormat />
      </div>

      <div className="flex">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default Controls;
