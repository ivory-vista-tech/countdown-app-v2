"use client";

import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";

const Reset = () => {
  const { setIsPlaying, timeItems, setTimeItems, setActiveStep } =
    useContext(DataContext);

  const toggleReset = () => {
    setIsPlaying(false);

    setTimeItems((prevState) => ({
      ...prevState,
      totalMilliseconds: getMilliseconds(timeItems),
      autoMode: false,
      workQueue: [],
      stepperQueue: [],
    }));

    setActiveStep(0);
  };

  return (
    <IconButton onClick={toggleReset}>
      <RestartAltIcon className="icon" />
    </IconButton>
  );
};

export default Reset;
