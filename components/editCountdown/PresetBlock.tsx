import React from "react";
import Preset from "../buttons/Preset";

const PresetBlock = () => {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-5 h-[100px]">
      <Preset presetTime="00:03:00" />
      <Preset presetTime="00:05:00" />
      <Preset presetTime="00:07:00" />
    </div>
  );
};

export default PresetBlock;
