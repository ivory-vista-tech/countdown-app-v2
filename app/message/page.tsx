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
    <>
      {isVisible ? <Controls /> : <div className="h-[100px]" />}

      <Message />
    </>
  ) : (
    <div className="h-screen" />
  );
};

export default MessagePage;
