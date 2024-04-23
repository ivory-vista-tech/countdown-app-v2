"use client";

import React, { useContext, useEffect, useState } from "react";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import CountDown from "@/components/countdown/CountDown";
import { DataContext } from "@/providers/DataProvider";
import Alert from "@/components/alert/Alert";
import TimeUp from "@/components/timeUp/TimeUp";
import Signal from "@/components/signal/Signal";
import Controls from "@/components/controls/Controls";
import Block from "@/components/block/Block";

const AutoPilotPage = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const {
    setFeature,
    showAlert,
    timeItems,
    isBreakTime,
    isVisible,
    showTimeUp,
  } = useContext(DataContext);

  useEffect(() => {
    setIsClient(true);

    setFeature("auto-pilot");
  }, [setFeature]);

  return isClient ? (
    <div className="flex size-full flex-col items-center justify-center">
      <Alert displayTimeMilliseconds={300000} />

      <Alert displayTimeMilliseconds={120000} />

      {isBreakTime && (
        <Signal message="Session Over!" closeButton={false} skipButton />
      )}

      {!timeItems.autoMode && <TimeUp />}

      {!showAlert &&
        !showTimeUp &&
        !isBreakTime &&
        timeItems.totalMilliseconds !== 1000 &&
        (isVisible ? <Controls setSchedule={setSchedule} /> : <Block />)}

      {!showAlert &&
        !isBreakTime &&
        !showTimeUp &&
        timeItems.totalMilliseconds !== 1000 && (
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
    <Block size="full" />
  );
};

export default AutoPilotPage;
