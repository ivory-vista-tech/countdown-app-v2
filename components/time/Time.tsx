"use client";

import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/providers/DataProvider";
import { sizes } from "../constants/styles";
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
    <div className="flex justify-center items-center h-[calc(100vh-280px)]">
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: 900,
          fontSize: sizes.amPmHoursIncluded,
        }}
      >
        {currentTime}
      </Typography>
    </div>
  );
};

export default Time;
