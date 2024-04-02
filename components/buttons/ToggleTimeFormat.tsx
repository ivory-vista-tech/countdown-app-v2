"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext } from "react";
import CustomButton from "../customized/CustomButton";

const ToggleTimeFormat = () => {
  const { feature, setTwentyFourHoursFormat, twentyFourHoursFormat } =
    useContext(DataContext);

  const handleToggleFormat = () => {
    setTwentyFourHoursFormat(!twentyFourHoursFormat);
  };

  const buttonName = twentyFourHoursFormat ? "12 HR FORMAT" : "24 HR FORMAT";

  return (
    <CustomButton
      name={buttonName}
      onClick={handleToggleFormat}
      style={{ display: feature === "time" ? "block" : "none" }}
    />
  );
};

export default ToggleTimeFormat;
