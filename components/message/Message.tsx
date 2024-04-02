"use client";

import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { messageTextStyle } from "../constants/styles";

const Message = () => {
  const { message } = useContext(DataContext);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-280px)]">
      <Typography variant="h1" sx={messageTextStyle}>
        {message.message.toUpperCase()}
      </Typography>
    </div>
  );
};

export default Message;
