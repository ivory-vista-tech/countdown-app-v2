"use client";

import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";

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
    <div className="flex flex-col h-full justify-center items-center">
      <IconButton onClick={toggleUp}>
        <AddIcon className="text-primary text-[40px] md:text-[50px]" />
      </IconButton>

      <h1 className="text-white font-bold size-hour-included">
        {value < 10 ? `0${value}` : value}
      </h1>

      <IconButton onClick={toggleDown}>
        <RemoveIcon className="text-primary text-[40px] md:text-[50px]" />
      </IconButton>
    </div>
  );
};

export default FigureBlock;
