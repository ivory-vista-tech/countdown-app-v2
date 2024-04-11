"use client";

import React, { useContext, useMemo } from "react";
import { isEqual } from "lodash";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import { cn } from "@/lib/utils";

interface TimeItems {
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
}

interface PresetProps {
  presetTime: string;
}

const Preset: React.FC<PresetProps> = ({ presetTime }) => {
  const {
    setTimeItems,
    timeItems: { autoMode, workQueue, stepperQueue, ...stateDataObject },
  } = useContext(DataContext);

  const parseTime = (timeString: string) => {
    const [hours, minutes, seconds] = timeString.split(":");

    return {
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    };
  };

  const timeObject = useMemo(() => parseTime(presetTime), [presetTime]);

  const newTimeItem: TimeItems = useMemo(
    () => ({
      ...timeObject,
      totalMilliseconds: getMilliseconds(timeObject),
    }),
    [timeObject]
  );

  const handleClick = () => {
    setTimeItems(newTimeItem);
  };

  const isEqualTimeItems = isEqual(stateDataObject, newTimeItem);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "cursor-pointer h-[40px] flex justify-center items-center px-4",
        {
          "bg-primary rounded-3xl": isEqualTimeItems,
          "text-gray-500": !isEqualTimeItems,
        }
      )}
    >
      <h1 className="md:text-2xl">{presetTime}</h1>
    </div>
  );
};

export default Preset;
