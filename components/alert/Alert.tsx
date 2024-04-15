"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext, useEffect, useState } from "react";
import Signal from "../signal/Signal";

interface AlertProp {
  displayTimeMilliseconds: number;
  durationMilliseconds?: number;
  message?: string;
}

const Alert = ({
  displayTimeMilliseconds,
  durationMilliseconds = 5000,
  message,
}: AlertProp) => {
  const {
    timeItems: { totalMilliseconds },
    isPlaying,
    setShowAlert,
    showAlert,
  } = useContext(DataContext);

  const [warning, setWarning] = useState(false);

  const minutes = displayTimeMilliseconds / 1000 / 60;
  const alertMessage = `You have less than ${minutes} minutes!`;

  useEffect(() => {
    if (
      isPlaying &&
      totalMilliseconds >= displayTimeMilliseconds - durationMilliseconds &&
      totalMilliseconds <= displayTimeMilliseconds
    ) {
      setWarning(true);
    }

    if (warning) {
      setShowAlert(true);
    }

    return () => {
      setWarning(false);
      setShowAlert(false);
    };
  }, [
    isPlaying,
    setShowAlert,
    totalMilliseconds,
    warning,
    displayTimeMilliseconds,
    durationMilliseconds,
  ]);

  return showAlert && warning ? (
    <Signal message={message || alertMessage} closeButton={false} />
  ) : null;
};

export default Alert;
