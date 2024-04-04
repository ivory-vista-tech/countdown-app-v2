"use client";

import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/providers/DataProvider";
import { getCurrentTime } from "@/utils/functions";

const Time = () => {
  const { twentyFourHoursFormat } = useContext(DataContext);
  const [currentTime, setCurrentTime] = useState<string>(
    getCurrentTime(twentyFourHoursFormat)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime(twentyFourHoursFormat));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [twentyFourHoursFormat]);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-380px)]">
      <h1 className=" font-bold size-AmPm-included">{currentTime}</h1>
    </div>
  );
};

export default Time;
