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
  const {
    setShowAlert,
    setIsPlaying,
    setActiveStep,
    setTimeItems,
    timeItems,
    setShowTimeUp,
  } = useContext(DataContext);

  const [timeLeft, setTimeLeft] = useState(5);

  const handleClick = () => {
    setShowAlert(false);
    setIsPlaying(false);
    setActiveStep(0);
    setShowTimeUp(false);

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
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeLeft]);

  return (
    <div className="absolute inset-0 h-screen w-screen bg-white">
      <div className="flex size-full animate-flash flex-col items-center justify-center gap-10 px-5">
        {closeButton && (
          <IconButton
            className="absolute right-[2%] top-[7%]"
            onClick={handleClick}
          >
            <CloseIcon className="animate-flash rounded-full p-2 text-[40px] md:text-[60px]" />
          </IconButton>
        )}

        <h1 className="size-message text-balance text-center font-bold leading-none">
          {message.toUpperCase()}
        </h1>

        {skipButton && (
          <Button className=" w-[200px] p-6 text-xs text-white lg:text-lg">
            Next Session In <span className="pl-4">{`(${timeLeft})`}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Signal;
