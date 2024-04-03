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

  return (
    <div className="h-[calc(100vh-180px)] min-h-[calc(100vh-180px)] w-full bg-red-700 animate-flash">
      {closeButton && (
        <IconButton className="absolute right-0 top-[5%]" onClick={handleClick}>
          <CloseIcon className="text-[50px] md:text-[70px] text-white" />
        </IconButton>
      )}

      <h1 className="size-message font-bold text-center flex h-full justify-center items-center leading-none">
        {message.toUpperCase()}
      </h1>
    </div>
  );
};

export default Signal;
