"use client";

import React, { useContext, useEffect } from "react";
import Signal from "../signal/Signal";
import { DataContext } from "@/providers/DataProvider";

const TimeUp = () => {
  const {
    timeItems: { totalMilliseconds },
    showTimeUp,
    setShowTimeUp,
  } = useContext(DataContext);

  useEffect(() => {
    if (totalMilliseconds === 1000) {
      setShowTimeUp(true);
    }
  }, [setShowTimeUp, totalMilliseconds]);

  return showTimeUp ? <Signal message="Time's Up" /> : null;
};

export default TimeUp;
