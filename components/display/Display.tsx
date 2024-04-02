"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext, useEffect, useState } from "react";
import CountDown from "../countdown/CountDown";
import Time from "../time/Time";
import Message from "../message/Message";

const Display = () => {
  const { feature } = useContext(DataContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className="flex justify-center items-center">
      {feature === "countdown" && <CountDown />}
      {feature === "time" && <Time />}
      {feature === "message" && <Message />}
    </div>
  ) : (
    <div className="h-screen" />
  );
};

export default Display;
