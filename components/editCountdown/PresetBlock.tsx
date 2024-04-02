import { Box } from "@mui/material";
import React from "react";
import Preset from "../buttons/Preset";

const PresetBlock = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: { xs: 2, md: 5 },
        // position: "absolute",
        // bottom: 0,
        height: 100,
      }}
    >
      <Preset presetTime="00:03:00" />
      <Preset presetTime="00:05:00" />
      <Preset presetTime="00:07:00" />
    </Box>
  );
};

export default PresetBlock;
