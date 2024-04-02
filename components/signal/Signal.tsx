"use client";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";

interface SignalProps {
  message: string;
  closeButton?: boolean;
  style?: React.CSSProperties;
}

const Signal = ({ message, closeButton = true, style = {} }: SignalProps) => {
  const { setShowTimeUp, setIsPlaying } = useContext(DataContext);

  const handleClick = () => {
    setShowTimeUp(false);
    setIsPlaying(false);
  };

  const classes = `h-[calc(100vh-67px)] w-full bg-red-700 animate-flash message-text`;

  return (
    <div className={classes}>
      {closeButton && (
        <IconButton
          onClick={handleClick}
          sx={{ position: "absolute", right: 0, top: 0 }}
        >
          <CloseIcon sx={{ fontSize: 100 }} />
        </IconButton>
      )}

      {message.toUpperCase()}
    </div>
  );
};

export default Signal;
