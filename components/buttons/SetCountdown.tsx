"use client";

import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import React, { useContext } from "react";
import CustomModifier from "../customized/CustomModifier";

const SetTime = () => {
  const {
    feature,
    editMode,
    setEditMode,
    setIsPlaying,
    timeItems,
    setTimeItems,
  } = useContext(DataContext);

  const handleConfirm = () => {
    if (editMode && hasNonZeroDuration()) {
      const newDuration = getMilliseconds(timeItems);

      setTimeItems((prevState) => ({
        ...prevState,
        totalMilliseconds: newDuration,
      }));
    }

    setIsPlaying(false);
    setEditMode(!editMode);
  };

  const handleClose = () => {
    setEditMode(!editMode);
  };

  const hasNonZeroDuration = () => {
    const { hours, minutes, seconds } = timeItems;
    return hours !== 0 || minutes !== 0 || seconds !== 0;
  };

  const buttonName = editMode ? "Confirm" : "Set Countdown";

  return (
    <CustomModifier
      condition={editMode && feature === "countdown"}
      buttonName={buttonName}
      handleClose={handleClose}
      handleButtonClick={handleConfirm}
      style={{ display: feature === "countdown" ? "block" : "none" }}
    />
  );
};

export default SetTime;
