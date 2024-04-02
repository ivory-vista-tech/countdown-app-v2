"use client";

import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import { getFormattedTime } from "@/utils/functions";
import { sizes } from "../constants/styles";
import PresetBlock from "../editCountdown/PresetBlock";
import EditCountDown from "../editCountdown/EditCountDown";

const Timer = () => {
  const { timeItems, isPlaying, isVisible, editMode } = useContext(DataContext);

  const currentTime = getFormattedTime(timeItems.totalMilliseconds);
  const hourIncluded = currentTime.length > 5;

  return editMode ? (
    <EditCountDown />
  ) : (
    <div className="flex flex-col justify-between items-center h-[calc(100vh-280px)] w-full">
      <Typography
        className="w-full flex justify-center items-center text-center"
        variant="h1"
        sx={{
          color: "white",
          fontWeight: 900,
          flex: 1,
          fontSize: hourIncluded ? sizes.hoursIncluded : sizes.hoursExcluded,
        }}
      >
        {currentTime}
      </Typography>

      {isVisible && !isPlaying ? (
        <PresetBlock />
      ) : (
        <div className="h-[100px]" />
      )}
    </div>
  );
};

export default Timer;
