"use client";

import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { DataContext, TimeItems } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface HandleToggleResetProps {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setTimeItems: React.Dispatch<React.SetStateAction<TimeItems>>;
  timeItems: TimeItems;
}

export const toggleReset = ({
  setIsPlaying,
  setTimeItems,
  setActiveStep,
  timeItems,
}: HandleToggleResetProps) => {
  setIsPlaying(false);

  setTimeItems((prevState: any) => ({
    ...prevState,
    totalMilliseconds: getMilliseconds(timeItems),
    autoMode: false,
    workQueue: [],
    stepperQueue: [],
  }));

  setActiveStep(0);
};

const Reset = () => {
  const { setIsPlaying, timeItems, setTimeItems, setActiveStep } =
    useContext(DataContext);

  return (
    <Tooltip>
      <TooltipTrigger>
        <IconButton
          onClick={() =>
            toggleReset({
              setIsPlaying,
              setTimeItems,
              setActiveStep,
              timeItems,
            })
          }
        >
          <RestartAltIcon className="icon" />
        </IconButton>
      </TooltipTrigger>

      <TooltipContent>
        <p>Reset (Ctrl+Shift+R)</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Reset;
