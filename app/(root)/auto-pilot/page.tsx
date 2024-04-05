"use client";

import { Add } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import CountDown from "@/components/countdown/CountDown";
import { DataContext } from "@/providers/DataProvider";
import Alert from "@/components/alert/Alert";
import TimeUp from "@/components/timeUp/TimeUp";
import Signal from "@/components/signal/Signal";

const AutoPilotPage = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const { setFeature, showAlert, timeItems, isBreakTime } =
    useContext(DataContext);

  useEffect(() => {
    setIsClient(true);

    setFeature("auto-mode");
  }, [setFeature]);

  return isClient ? (
    <div>
      <Alert displayTimeMilliseconds={300000} />

      <Alert displayTimeMilliseconds={120000} />

      {isBreakTime && <Signal message="Break Time" closeButton={false} />}

      {!timeItems.autoMode && <TimeUp />}

      {!showAlert && <CountDown />}

      {!showAlert && (
        <div className="flex justify-end">
          <div
            className="flex justify-center size-14 bg-primary rounded-full items-center shadow-md cursor-pointer"
            onClick={() => setSchedule(true)}
          >
            <Add />
          </div>
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
