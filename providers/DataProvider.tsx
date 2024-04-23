"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useLocalStorage } from "@/customHooks/useLocalStorage";
import { getMilliseconds } from "@/utils/functions";

const TIME_OUT = 10_000;
const ONE_SECOND = 1_000;
const WAIT_TIME = 5_000;

interface TimeItems {
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  autoMode?: boolean;
  workQueue?: number[];
  stepperQueue?: number[];
}

interface MessageItems {
  message: string;
  tempMessage: string;
}

interface DataContextType {
  feature: string;
  setFeature: React.Dispatch<React.SetStateAction<string>>;
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  showTimeUp: boolean;
  setShowTimeUp: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isBreakTime: boolean;
  setIsBreakTime: React.Dispatch<React.SetStateAction<boolean>>;
  twentyFourHoursFormat: boolean;
  setTwentyFourHoursFormat: React.Dispatch<React.SetStateAction<boolean>>;
  message: MessageItems;
  setMessage: React.Dispatch<React.SetStateAction<MessageItems>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isFullscreen: boolean;
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  timeItems: TimeItems;
  setTimeItems: React.Dispatch<React.SetStateAction<TimeItems>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const initialContext: DataContextType = {
  feature: "home",
  setFeature: () => {},
  showAlert: false,
  setShowAlert: () => {},
  showTimeUp: false,
  setShowTimeUp: () => {},
  editMode: false,
  setEditMode: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  isBreakTime: false,
  setIsBreakTime: () => {},
  isVisible: false,
  setIsVisible: () => {},
  isFullscreen: false,
  setIsFullscreen: () => {},
  activeStep: 0,
  setActiveStep: () => {},
  timeItems: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMilliseconds: 0,
    autoMode: false,
    workQueue: [],
    stepperQueue: [],
  },
  setTimeItems: () => {},
  message: { message: "", tempMessage: "" },
  setMessage: () => {},
  twentyFourHoursFormat: true,
  setTwentyFourHoursFormat: () => {},
};

export const DataContext = createContext(initialContext);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [feature, setFeature] = useState("home");
  const [showAlert, setShowAlert] = useState(false);
  const [showTimeUp, setShowTimeUp] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [twentyFourHoursFormat, setTwentyFourHoursFormat] = useLocalStorage({
    key: "twentyFourHoursFormat",
    defaultValue: JSON.stringify(true),
  });
  const [message, setMessage] = useLocalStorage({
    key: "message",
    defaultValue: JSON.stringify({
      message: "<h1>Type your message here...</h1>",
      tempMessage: "",
    }),
  });
  const [timeItems, setTimeItems] = useLocalStorage({
    key: "timeItems",
    defaultValue: JSON.stringify({
      hours: 0,
      minutes: 10,
      seconds: 0,
      totalMilliseconds: 600000,
      autoMode: false,
      workQueue: [],
      stepperQueue: [],
    }),
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (isPlaying) {
          setIsVisible(false);
        }
      }, TIME_OUT);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isPlaying]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const processWorkQueue = (queue: number[]) => {
      if (queue.length > 0) {
        setShowAlert(false);

        setIsPlaying(true);

        if (queue.length !== timeItems.stepperQueue.length) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        setTimeItems((prevTimeItems: any) => ({
          ...prevTimeItems,
          totalMilliseconds: queue[0],
          workQueue: queue.slice(1),
          autoMode: queue.length > 1,
        }));
      } else {
        setIsPlaying(false);
      }
    };

    if (isPlaying && timeItems.totalMilliseconds > 0) {
      timeoutId = setTimeout(() => {
        setTimeItems((prevTimeItems: { totalMilliseconds: number }) => ({
          ...prevTimeItems,
          totalMilliseconds: prevTimeItems.totalMilliseconds - ONE_SECOND,
        }));
      }, 975);
    }

    if (
      timeItems.totalMilliseconds <= 1000 &&
      timeItems.workQueue?.length > 0
    ) {
      setIsBreakTime(true);
      setIsPlaying(false);
    }

    if (timeItems.workQueue?.length === timeItems.stepperQueue?.length) {
      if (isPlaying && timeItems.autoMode && timeItems.workQueue.length > 0) {
        processWorkQueue(timeItems.workQueue);
      }
    } else {
      timeoutId = setTimeout(() => {
        setIsBreakTime(false);

        if (
          !isPlaying &&
          timeItems.autoMode &&
          timeItems.workQueue.length > 0
        ) {
          processWorkQueue(timeItems.workQueue);
        }
      }, WAIT_TIME);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, timeItems, setTimeItems, isBreakTime]);

  if (timeItems.totalMilliseconds < 1000) {
    setShowAlert(true);

    setIsPlaying(false);

    setTimeItems((prevTimeItems: any) => ({
      ...prevTimeItems,
      totalMilliseconds: getMilliseconds(prevTimeItems),
    }));
  }

  return (
    <DataContext.Provider
      value={{
        feature,
        setFeature,
        showAlert,
        setShowAlert,
        showTimeUp,
        setShowTimeUp,
        editMode,
        setEditMode,
        isPlaying,
        setIsPlaying,
        isBreakTime,
        setIsBreakTime,
        timeItems,
        setTimeItems,
        message,
        setMessage,
        isVisible,
        setIsVisible,
        activeStep,
        setActiveStep,
        isFullscreen,
        setIsFullscreen,
        twentyFourHoursFormat,
        setTwentyFourHoursFormat,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
