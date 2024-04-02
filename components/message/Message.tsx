"use client";

import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { messageTextStyle } from "../constants/styles";
import EditMessage from "../editMessage/EditMessage";

const Message = () => {
  const { message, editMode } = useContext(DataContext);

  return editMode ? (
    <EditMessage />
  ) : (
    <div className="flex justify-center items-center h-[calc(100vh-280px)]">
      <Typography variant="h1" sx={messageTextStyle}>
        {message.message.toUpperCase()}
      </Typography>
    </div>
  );
};

export default Message;
