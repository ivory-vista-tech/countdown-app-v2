"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext, useEffect } from "react";
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
  } = useContext(DataContext);

  const minutes = displayTimeMilliseconds / 1000 / 60;
  const alertMessage = `You have less than ${minutes} minutes!`;

  const alertShouldShow =
    isPlaying &&
    totalMilliseconds >= displayTimeMilliseconds - durationMilliseconds &&
    totalMilliseconds <= displayTimeMilliseconds;

  useEffect(() => {
    if (alertShouldShow) {
      setShowAlert(true);

      return () => {
        setShowAlert(false);
      };
    }
  }, [alertShouldShow, setShowAlert]);

  return alertShouldShow ? (
    <Signal message={message || alertMessage} closeButton={false} />
  ) : null;
};

export default Alert;
