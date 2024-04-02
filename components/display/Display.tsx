"use client";

import { DataContext } from "@/providers/DataProvider";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CountDown from "../countdown/CountDown";
import EditCountDown from "../editCountdown/EditCountDown";
import Time from "../time/Time";
import Message from "../message/Message";
import EditMessage from "../editMessage/EditMessage";

const Display = () => {
  const { feature, editMode } = useContext(DataContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className="flex justify-center items-center h-screen]">
      {feature === "countdown" && !editMode && <CountDown />}
      {feature === "countdown" && editMode && <EditCountDown />}
      {feature === "time" && <Time />}
      {feature === "message" && !editMode && <Message />}
      {feature === "message" && editMode && <EditMessage />}
    </div>
  ) : (
    <div className="h-screen" />
  );
};

export default Display;
