"use client";

import React, { useContext, useEffect, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { IconButton } from "@mui/material";
import { DataContext } from "@/providers/DataProvider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const FullScreen = () => {
  const { isFullscreen, setIsFullscreen } = useContext(DataContext);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [setIsFullscreen]);

  return (
    <Tooltip>
      <TooltipTrigger>
        <IconButton onClick={toggleFullscreen}>
          {isFullscreen ? (
            <FullscreenExitIcon className="icon" />
          ) : (
            <FullscreenIcon className="icon" />
          )}
        </IconButton>
      </TooltipTrigger>

      <TooltipContent>
        <p>
          {isFullscreen
            ? "Exit fullscreen (Ctrl+Shift+F)"
            : "Fullscreen (Ctrl+Shift+F)"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default FullScreen;
