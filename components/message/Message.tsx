"use client";

import React, { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import EditMessage from "../editMessage/EditMessage";

const Message = () => {
  const {
    message: { message },
    editMode,
  } = useContext(DataContext);

  return editMode ? (
    <EditMessage />
  ) : (
    <div className="flex justify-center items-center h-[calc(100vh-380px)]">
      <h1 className="size-message font-bold text-center flex h-full justify-center items-center leading-none">
        {message}
      </h1>
    </div>
  );
};

export default Message;
