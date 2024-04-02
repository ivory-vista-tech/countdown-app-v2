"use client";

import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";

const PlayAndPause = () => {
  const {
    isPlaying,
    setIsPlaying,
    editMode,
    setEditMode,
    timeItems,
    setTimeItems,
  } = useContext(DataContext);

  const handlePlayToggle = () => {
    if (canTogglePlay()) {
      setIsPlaying(!isPlaying);

      if (editMode) {
        setTimeItems((prevState) => ({
          ...prevState,
          totalMilliseconds: getMilliseconds(timeItems),
        }));

        setEditMode(!editMode);
      }
    }
  };

  const canTogglePlay = () => {
    if (!editMode) return true;

    const { hours, minutes, seconds } = timeItems;
    return hours !== 0 || minutes !== 0 || seconds !== 0;
  };

  return (
    <IconButton onClick={handlePlayToggle}>
      {isPlaying ? (
        <PauseCircleOutlineIcon className="icon" />
      ) : (
        <PlayCircleOutlineIcon className="icon" />
      )}
    </IconButton>
  );
};

export default PlayAndPause;
