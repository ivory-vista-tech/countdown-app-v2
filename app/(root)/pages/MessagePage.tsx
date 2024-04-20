"use client";

import Controls from "@/components/controls/Controls";
import Message from "@/components/message/Message";
import { DataContext } from "@/providers/DataProvider";
import React, { useContext, useEffect, useState } from "react";

const MessagePage = () => {
  const { isVisible, setFeature } = useContext(DataContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFeature("message");
  }, [setFeature]);

  return isClient ? (
    <div className="flex size-full flex-col">
      {isVisible ? (
        <Controls setSchedule={undefined} />
      ) : (
        <div className="h-[100px]" />
      )}

      <div className="flex-1 px-5 xl:px-20">
        <Message />
      </div>

      <div className="h-[100px]" />
    </div>
  ) : (
    <div className="h-screen" />
  );
};

export default MessagePage;
