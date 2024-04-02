"use client";

import React, { useContext, useMemo } from "react";
import { isEqual } from "lodash";
import { Button, Typography } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";

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
  const { setTimeItems, timeItems } = useContext(DataContext);

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

  const isEqualTimeItems = isEqual(timeItems, newTimeItem);

  return (
    <Button
      variant="text"
      size="large"
      onClick={handleClick}
      sx={{ color: isEqualTimeItems ? "default" : "grey" }}
      disableRipple
    >
      <Typography sx={{ fontSize: { xs: 20, md: 30 } }}>
        {presetTime}
      </Typography>
    </Button>
  );
};

export default Preset;
