"use client";

import { Box } from "@mui/material";
import React, { useContext } from "react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import Navigation from "../navigation/Navigation";
import { DataContext } from "@/providers/DataProvider";

const Main = () => {
  const { isVisible } = useContext(DataContext);

  return (
    <div className="h-full w-full bg-red-200 flex flex-col justify-between">
      {isVisible ? <Controls /> : <Box sx={{ height: "100px" }} />}
      <Display />
      {isVisible ? <Navigation /> : <Box sx={{ height: "100px" }} />}
    </div>
  );
};

export default Main;
