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
    <>
      {isVisible ? <Controls /> : <div className="h-[100px]" />}

      <Time />
    </>
  ) : (
    <div className="h-[100px]" />
  );
};

export default TimePage;
