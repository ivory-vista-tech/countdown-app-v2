"use client";

import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
    <>
      {editMode && feature === "countdown" && (
        <IconButton onClick={handleClose}>
          <CloseIcon className="icon" />
        </IconButton>
      )}

      <Button
        type="submit"
        onClick={handleConfirm}
        className={
          "bg-blue-1 p-[30px] focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
        }
      >
        {buttonName.toUpperCase()}
      </Button>
    </>
  );
};

export default SetTime;
