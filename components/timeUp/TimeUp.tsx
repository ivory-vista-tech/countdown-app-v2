"use client";

import React, { useContext, useEffect, useState } from "react";
import Signal from "../signal/Signal";
import { DataContext } from "@/providers/DataProvider";

const TimeUp = () => {
  const {
    showAlert,
    timeItems: { totalMilliseconds },
  } = useContext(DataContext);
  const [showTimeUp, setShowTimeUp] = useState(false);

  const timeUpMessage = "Time's Up";

  useEffect(() => {
    if (totalMilliseconds === 1000) {
      setShowTimeUp(true);
    }
  }, [totalMilliseconds]);

  return showAlert && showTimeUp ? <Signal message={timeUpMessage} /> : null;
};

export default TimeUp;
