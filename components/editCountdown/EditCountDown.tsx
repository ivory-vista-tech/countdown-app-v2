"use client";

import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import FigureBlock from "./FigureBlock";

const fontStyle = {
  color: "white",
  fontWeight: 900,
  fontSize: {
    xs: 70,
    sm: 70,
    md: 120,
    lg: 120,
    xl: 120,
  },
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const EditCountDown = () => {
  const { timeItems } = useContext(DataContext);

  return (
    <div className="flex justify-center items-center  h-[calc(100vh-280px)]">
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FigureBlock value={timeItems.hours} toggle="hours" />
        <Typography variant="h1" sx={fontStyle}>
          :
        </Typography>
        <FigureBlock value={timeItems.minutes} toggle="minutes" />
        <Typography variant="h1" sx={fontStyle}>
          :
        </Typography>
        <FigureBlock value={timeItems.seconds} toggle="seconds" />
      </Box>
    </div>
  );
};

export default EditCountDown;
