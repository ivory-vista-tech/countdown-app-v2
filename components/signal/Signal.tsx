"use client";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";

interface SignalProps {
  message: string;
  closeButton?: boolean;
  style?: React.CSSProperties;
}

const Signal = ({ message, closeButton = true }: SignalProps) => {
  const { setShowAlert, setIsPlaying, setActiveStep, setTimeItems, timeItems } =
    useContext(DataContext);

  const handleClick = () => {
    setShowAlert(false);
    setIsPlaying(false);
    setActiveStep(0);

    setTimeItems((prevState) => ({
      ...prevState,
      totalMilliseconds: getMilliseconds(timeItems),
      autoMode: false,
      workQueue: [],
      stepperQueue: [],
    }));
  };

  return (
    <div className="size-full bg-red-700 animate-flash">
      {closeButton && (
        <IconButton
          className="absolute right-[2%] top-[7%]"
          onClick={handleClick}
        >
          <CloseIcon className="text-[40px] md:text-[60px] text-white" />
        </IconButton>
      )}

      <h1 className="size-message font-bold text-center flex h-full justify-center items-center leading-none">
        {message.toUpperCase()}
      </h1>
    </div>
  );
};

export default Signal;
