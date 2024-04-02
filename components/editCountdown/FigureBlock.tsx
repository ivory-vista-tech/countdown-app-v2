"use client";

import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { sizes } from "../constants/styles";

const buttonStyle = { fontSize: { xs: 40, md: 60 }, color: "#1976d2" };

interface FigureBlockProps {
  toggle: "hours" | "minutes" | "seconds";
  value: number;
}

const FigureBlock = ({ toggle, value }: FigureBlockProps) => {
  const { setTimeItems } = useContext(DataContext);

  const toggleUp = () => {
    setTimeItems((prevTimeItems) => {
      const newValue =
        toggle === "hours"
          ? (prevTimeItems.hours + 1) % 100
          : (prevTimeItems[toggle] + 1) % 60;

      return { ...prevTimeItems, [toggle]: newValue };
    });
  };

  const toggleDown = () => {
    setTimeItems((prevTimeItems) => {
      const newValue =
        toggle === "hours"
          ? (prevTimeItems.hours - 1 + 100) % 100
          : (prevTimeItems[toggle] - 1 + 60) % 60;

      return { ...prevTimeItems, [toggle]: newValue };
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={toggleUp}>
        <AddIcon sx={buttonStyle} />
      </IconButton>

      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: 900,
          fontSize: sizes.hoursIncluded,
        }}
      >
        {value < 10 ? `0${value}` : value}
      </Typography>

      <IconButton onClick={toggleDown}>
        <RemoveIcon sx={buttonStyle} />
      </IconButton>
    </Box>
  );
};

export default FigureBlock;
