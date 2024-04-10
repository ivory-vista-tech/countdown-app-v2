"use client";

import React, { useContext, useEffect, useState } from "react";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import CountDown from "@/components/countdown/CountDown";
import { DataContext } from "@/providers/DataProvider";
import Alert from "@/components/alert/Alert";
import TimeUp from "@/components/timeUp/TimeUp";
import Signal from "@/components/signal/Signal";
import Controls from "@/components/controls/Controls";

const AutoPilotPage = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const { setFeature, showAlert, timeItems, isBreakTime, isVisible } =
    useContext(DataContext);

  useEffect(() => {
    setIsClient(true);

    setFeature("auto-pilot");
  }, [setFeature]);

  return isClient ? (
    <div className="flex flex-col size-full">
      <Alert displayTimeMilliseconds={300000} />

      <Alert displayTimeMilliseconds={120000} />

      {isBreakTime && <Signal message="Session Over!" closeButton={false} />}

      {!timeItems.autoMode && <TimeUp />}

      {!showAlert &&
        timeItems.totalMilliseconds !== 1000 &&
        (isVisible ? (
          <Controls setSchedule={setSchedule} />
        ) : (
          <div className="h-[100px]" />
        ))}

      {!showAlert && timeItems.totalMilliseconds !== 1000 && (
        <div className="flex-1">
          <CountDown />
        </div>
      )}

      <ScheduleModal
        isOpen={schedule}
        onClose={() => {
          setSchedule(false);
        }}
      />
    </div>
  ) : (
    <div className="h-screen" />
  );
};

export default AutoPilotPage;
