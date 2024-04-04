"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useLocalStorage } from "@/customHooks/useLocalStorage";
import { getMilliseconds } from "@/utils/functions";

const TIME_OUT = 10_000;
const ONE_SECOND = 1_000;

interface TimeItems {
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  autoMode: boolean;
  workQueue: number[];
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
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
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
}

const initialContext: DataContextType = {
  feature: "countdown",
  setFeature: () => {},
  showAlert: false,
  setShowAlert: () => {},
  editMode: false,
  setEditMode: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  isVisible: false,
  setIsVisible: () => {},
  isFullscreen: false,
  setIsFullscreen: () => {},
  timeItems: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMilliseconds: 0,
    autoMode: false,
    workQueue: [],
  },
  message: { message: "", tempMessage: "" },
  setMessage: () => {},
  setTimeItems: () => {},
  twentyFourHoursFormat: true,
  setTwentyFourHoursFormat: () => {},
};

export const DataContext = createContext(initialContext);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [feature, setFeature] = useState("countdown");
  const [showAlert, setShowAlert] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [twentyFourHoursFormat, setTwentyFourHoursFormat] = useLocalStorage({
    key: "twentyFourHoursFormat",
    defaultValue: JSON.stringify(true),
  });
  const [message, setMessage] = useLocalStorage({
    key: "message",
    defaultValue: JSON.stringify({
      message: "You have 5 more minutes!",
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
    }),
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, TIME_OUT);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isPlaying && timeItems.totalMilliseconds > 0) {
      timeoutId = setTimeout(() => {
        setTimeItems((prevTimeItems: { totalMilliseconds: number }) => ({
          ...prevTimeItems,
          totalMilliseconds: prevTimeItems.totalMilliseconds - ONE_SECOND,
        }));
      }, 975);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, timeItems, setTimeItems]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const processWorkQueue = (queue: number[]) => {
      if (queue.length > 0) {
        setIsPlaying(true);

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

    if (timeItems.autoMode && timeItems.workQueue.length > 0 && !isPlaying) {
      processWorkQueue(timeItems.workQueue);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, timeItems, setTimeItems]);

  if (timeItems.totalMilliseconds === 0) {
    setShowAlert(true);

    setIsPlaying(false);

    setTimeItems({
      ...timeItems,
      totalMilliseconds: getMilliseconds(timeItems),
    });
  }

  return (
    <DataContext.Provider
      value={{
        feature,
        setFeature,
        showAlert,
        setShowAlert,
        editMode,
        setEditMode,
        isPlaying,
        setIsPlaying,
        timeItems,
        setTimeItems,
        message,
        setMessage,
        isVisible,
        setIsVisible,
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
