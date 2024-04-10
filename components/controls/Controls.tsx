"use client";

import React, { useContext } from "react";
import SetCountdown from "../buttons/SetCountdown";
import SetMessage from "../buttons/SetMessage";
import ToggleTimeFormat from "../buttons/ToggleTimeFormat";
import ButtonGroup from "../buttons/ButtonGroup";
import { DataContext } from "@/providers/DataProvider";
import SetSchedule from "../schedule/SetSchedule";

interface SetScheduleProps {
  setSchedule: any;
}

const Controls = ({ setSchedule }: SetScheduleProps) => {
  const { feature } = useContext(DataContext);

  return (
    <div className="flex justify-center w-full min-w-full">
      <div className="flex gap-4 justify-center items-center w-full max-w-[1440px] h-[100px] mx-[4px] md:mx-[40px] lg:mx-[100px]">
        <div className="flex-1">
          {feature === "countdown" && <SetCountdown />}
          {feature === "auto-pilot" && (
            <SetSchedule handleClick={setSchedule} />
          )}
          {feature === "message" && <SetMessage />}
          {feature === "time" && <ToggleTimeFormat />}
        </div>

        <ButtonGroup />
      </div>
    </div>
  );
};

export default Controls;
