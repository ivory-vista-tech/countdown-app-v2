"use client";

import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";
import PlayAndPause from "./PlayAndPause";
import Reset from "./Reset";
import FullScreen from "./FullScreen";

const ButtonGroup = () => {
  const { feature } = useContext(DataContext);

  return (
    <div>
      {feature === "countdown" && (
        <>
          <PlayAndPause />
          <Reset />
        </>
      )}
      <FullScreen />
    </div>
  );
};

export default ButtonGroup;
