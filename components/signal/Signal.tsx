"use client";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import { Button } from "../ui/button";

interface SignalProps {
  message: string;
  closeButton?: boolean;
  skipButton?: boolean;
  style?: React.CSSProperties;
}

const Signal = ({
  message,
  closeButton = true,
  skipButton = false,
}: SignalProps) => {
  const { setShowAlert, setIsPlaying, setActiveStep, setTimeItems, timeItems } =
    useContext(DataContext);

  const [timeLeft, setTimeLeft] = useState(5);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeLeft]);

  return (
    <div className="size-full flex flex-col justify-center items-center gap-10 bg-red-700 animate-flash">
      {closeButton && (
        <IconButton
          className="absolute right-[2%] top-[7%]"
          onClick={handleClick}
        >
          <CloseIcon className="text-[40px] md:text-[60px] text-white" />
        </IconButton>
      )}

      <h1 className="size-message font-bold text-center leading-none">
        {message.toUpperCase()}
      </h1>

      {skipButton && (
        <Button className=" text-white text-xs lg:text-lg py-4 lg:py-6 px-6 lg:px-10">
          Skip Now! <span className="pl-4">{`(${timeLeft})`}</span>
        </Button>
      )}
    </div>
  );
};

export default Signal;
