"use client";

import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";
import PlayAndPause from "./PlayAndPause";
import Reset from "./Reset";
import FullScreen from "./FullScreen";
import MobileNav from "../nav/MobileNav";

const ButtonGroup = () => {
  const { feature, isFullscreen } = useContext(DataContext);

  return (
    <div className="flex gap-4">
      {feature === "countdown" ||
        (feature === "auto-pilot" && (
          <>
            <PlayAndPause />
            <Reset />
          </>
        ))}
      <FullScreen />

      {isFullscreen && <MobileNav />}
    </div>
  );
};

export default ButtonGroup;
