"use client";

import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import FigureBlock from "./FigureBlock";

const fontStyle = {
  color: "white",
  fontWeight: 900,
  fontSize: {
    xs: 100,
    sm: 150,
    md: 200,
    lg: 350,
    xl: 450,
  },
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const EditCountDown = () => {
  const { timeItems } = useContext(DataContext);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
    </Box>
  );
};

export default EditCountDown;
