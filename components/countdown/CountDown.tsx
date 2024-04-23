"use client";

import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getFormattedTime } from "@/utils/functions";
import PresetBlock from "../editCountdown/PresetBlock";
import EditCountDown from "../editCountdown/EditCountDown";
import { cn } from "@/lib/utils";
import ScheduleStepper from "../stepper/ScheduleStepper";
import Block from "../block/Block";

const Timer = () => {
  const { timeItems, isPlaying, isVisible, editMode, feature, showAlert } =
    useContext(DataContext);

  const currentTime = getFormattedTime(timeItems.totalMilliseconds);
  const hourIncluded = currentTime.length > 5;

  return editMode ? (
    <EditCountDown />
  ) : (
    <div className="flex size-full flex-col items-center justify-between">
      <h1
        className={cn(
          "flex w-full flex-1 items-center justify-center text-center font-bold",
          {
            "size-hour-included": hourIncluded,
            "size-hour-excluded": !hourIncluded,
          },
        )}
      >
        {currentTime}
      </h1>

      <BottomBlock
        isPlaying={isPlaying}
        isVisible={isVisible}
        feature={feature}
        showAlert={showAlert}
        stepperQueue={timeItems.stepperQueue || []}
      />
    </div>
  );
};

export default Timer;

export const BottomBlock = ({
  isVisible,
  isPlaying,
  feature,
  showAlert,
  stepperQueue,
}: {
  isVisible: boolean;
  isPlaying: boolean;
  feature: string;
  showAlert: boolean;
  stepperQueue: number[];
}) => {
  if (isVisible && !isPlaying && feature === "countdown") {
    return <PresetBlock />;
  } else if (!showAlert && feature === "auto-pilot") {
    return <ScheduleStepper queue={stepperQueue} />;
  } else {
    return <Block />;
  }
};
