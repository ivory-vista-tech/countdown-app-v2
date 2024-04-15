"use client";

import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";
import PlayAndPause from "./PlayAndPause";
import Reset from "./Reset";
import FullScreen from "./FullScreen";
import MobileNav from "../nav/MobileNav";

const ButtonGroup = () => {
  const {
    feature,
    isFullscreen,
    isPlaying,
    timeItems: { autoMode },
  } = useContext(DataContext);

  return (
    <div className="flex gap-4">
      {feature === "countdown" && (
        <>
          <PlayAndPause />
          <Reset />
        </>
      )}

      {feature === "auto-pilot" && (
        <>
          {!isPlaying && autoMode && <PlayAndPause />}
          <Reset />
        </>
      )}

      <FullScreen />

      {isFullscreen && <MobileNav />}
    </div>
  );
};

export default ButtonGroup;
