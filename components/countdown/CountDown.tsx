"use client";

import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getFormattedTime } from "@/utils/functions";
import PresetBlock from "../editCountdown/PresetBlock";
import EditCountDown from "../editCountdown/EditCountDown";
import { cn } from "@/lib/utils";
import ScheduleStepper from "../stepper/ScheduleStepper";

const Timer = () => {
  const { timeItems, isPlaying, isVisible, editMode, feature } =
    useContext(DataContext);

  const currentTime = getFormattedTime(timeItems.totalMilliseconds);
  const hourIncluded = currentTime.length > 5;

  return editMode ? (
    <EditCountDown />
  ) : (
    <div className="flex flex-col justify-between items-center size-full">
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

      {isVisible && !isPlaying && feature !== "auto-pilot" ? (
        <PresetBlock />
      ) : (
        <div className="h-[100px]" />
      )}

      {/* {feature === "auto-pilot" && <ScheduleStepper queueSize={5} />} */}
    </div>
  );
};

export default Timer;
