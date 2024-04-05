"use client";

import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getFormattedTime } from "@/utils/functions";
import PresetBlock from "../editCountdown/PresetBlock";
import EditCountDown from "../editCountdown/EditCountDown";
import { cn } from "@/lib/utils";

const Timer = () => {
  const { timeItems, isPlaying, isVisible, editMode, feature } =
    useContext(DataContext);

  const currentTime = getFormattedTime(timeItems.totalMilliseconds);
  const hourIncluded = currentTime.length > 5;

  return editMode ? (
    <EditCountDown />
  ) : (
    <div className="flex flex-col justify-between items-center h-[calc(100vh-280px)] w-full">
      <h1
        className={cn(
          "w-full flex justify-center items-center text-center font-bold flex-1",
          {
            "size-hour-included": hourIncluded,
            "size-hour-excluded": !hourIncluded,
          }
        )}
      >
        {currentTime}
      </h1>

      {isVisible && !isPlaying && feature !== "auto-mode" ? (
        <PresetBlock />
      ) : (
        <div className="h-[100px]" />
      )}
    </div>
  );
};

export default Timer;
