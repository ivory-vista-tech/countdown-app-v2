"use client";

import Controls from "@/components/controls/Controls";
import Time from "@/components/time/Time";
import { DataContext } from "@/providers/DataProvider";
import React, { useContext, useEffect, useState } from "react";

const TimePage = () => {
  const { isVisible, setFeature } = useContext(DataContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFeature("time");
  }, [setFeature]);

  return isClient ? (
    <div className="flex flex-col size-full">
      {isVisible ? (
        <Controls setSchedule={undefined} />
      ) : (
        <div className="h-[100px]" />
      )}

      <Time />

      <div className="h-[100px]" />
    </div>
  ) : (
    <div className="h-screen" />
  );
};

export default TimePage;
