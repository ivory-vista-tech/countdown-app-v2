"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext } from "react";
import { Button } from "../ui/button";

const ToggleTimeFormat = () => {
  const { setTwentyFourHoursFormat, twentyFourHoursFormat } =
    useContext(DataContext);

  const handleToggleFormat = () => {
    setTwentyFourHoursFormat(!twentyFourHoursFormat);
  };

  const buttonName = twentyFourHoursFormat ? "12 HR FORMAT" : "24 HR FORMAT";

  return (
    <Button
      type="submit"
      onClick={handleToggleFormat}
      variant="outline"
      className={"timer-button"}
    >
      {buttonName.toUpperCase()}
    </Button>
  );
};

export default ToggleTimeFormat;
