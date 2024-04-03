"use client";

import React, { useContext } from "react";
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
      <div className="flex">
        <FigureBlock value={timeItems.hours} toggle="hours" />

        <h1 className="size-hour-included flex justify-center items-center">
          :
        </h1>

        <FigureBlock value={timeItems.minutes} toggle="minutes" />

        <h1 className="size-hour-included flex justify-center items-center">
          :
        </h1>

        <FigureBlock value={timeItems.seconds} toggle="seconds" />
      </div>
    </div>
  );
};

export default EditCountDown;
