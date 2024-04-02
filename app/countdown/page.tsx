"use client";

import Controls from "@/components/controls/Controls";
import CountDown from "@/components/countdown/CountDown";
import Signal from "@/components/signal/Signal";
import TimeUp from "@/components/timeUp/TimeUp";
import { DataContext } from "@/providers/DataProvider";
import { useState, useEffect, useContext } from "react";

const CountDownPage = () => {
  const {
    isVisible,
    setFeature,
    showTimeUp,
    isPlaying,
    timeItems: { totalMilliseconds },
  } = useContext(DataContext);
  const [isClient, setIsClient] = useState(false);

  interface ShowAlertProps {
    displayTimeMilliseconds: number;
    durationMilliseconds?: number;
  }

  const showAlert = ({
    displayTimeMilliseconds,
    durationMilliseconds = 5000,
  }: ShowAlertProps) => {
    const minutes = displayTimeMilliseconds / 1000 / 60;
    const alertMessage = `You have less than ${minutes} minutes!`;

    return {
      indicator:
        isPlaying &&
        totalMilliseconds >= displayTimeMilliseconds - durationMilliseconds &&
        totalMilliseconds <= displayTimeMilliseconds,
      message: alertMessage,
    };
  };

  const { indicator: fiveMinutesWarning, message: fiveMinutesMessage } =
    showAlert({ displayTimeMilliseconds: 300000 });
  const { indicator: twoMinutesWarning, message: twoMinutesMessage } =
    showAlert({ displayTimeMilliseconds: 120000 });

  useEffect(() => {
    setIsClient(true);
    setFeature("countdown");
  }, [setFeature]);

  return isClient ? (
    <>
      {fiveMinutesWarning && (
        <Signal message={fiveMinutesMessage} closeButton={false} />
      )}

      {twoMinutesWarning && (
        <Signal message={twoMinutesMessage} closeButton={false} />
      )}

      {showTimeUp && <TimeUp />}

      {!fiveMinutesWarning &&
        !twoMinutesWarning &&
        !showTimeUp &&
        (isVisible ? <Controls /> : <div className="h-[100px]" />)}

      {!fiveMinutesWarning && !twoMinutesWarning && !showTimeUp && (
        <CountDown />
      )}
    </>
  ) : (
    <div className="h-screen" />
  );
};

export default CountDownPage;
