"use client";

import Alert from "@/components/alert/Alert";
import Main from "@/components/main/Main";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";
import TimeUp from "@/components/timeUp/TimeUp";
import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";

const Home = () => {
  const { showTimeUp } = useContext(DataContext);

  return (
    <div>
      <Alert displayTimeMilliseconds={300000} />

      <Alert displayTimeMilliseconds={120000} />

      {showTimeUp && <TimeUp />}

      <Main />
    </div>
  );
};

export default Home;
