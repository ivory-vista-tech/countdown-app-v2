"use client";

import { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import HomePage from "./pages/HomePage";
import AutoPilotPage from "./pages/AutoPilotPage";
import CountDownPage from "./pages/CountDownPage";
import TimePage from "./pages/TimePage";
import MessagePage from "./pages/MessagePage";

const Home = () => {
  const { feature } = useContext(DataContext);

  return (
    <>
      {feature === "home" && <HomePage />}
      {feature === "auto-pilot" && <AutoPilotPage />}
      {feature === "countdown" && <CountDownPage />}
      {feature === "time" && <TimePage />}
      {feature === "message" && <MessagePage />}
    </>
  );
};

export default Home;
