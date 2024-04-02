"use client";

import React, { useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MessageIcon from "@mui/icons-material/Message";
import { DataContext } from "@/providers/DataProvider";

const iconStyle = {
  fontSize: { xs: 40, md: 50 },
};

const actionStyle = {
  mx: { xs: 1, md: 5 },
  color: "white",
  ".MuiBottomNavigationAction-label.Mui-selected": {
    fontSize: { xs: 15, md: 20 },
    py: 1,
  },
};

const Navigation = () => {
  const { feature, setFeature } = useContext(DataContext);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setFeature(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "transparent",
      }}
      value={feature}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Countdown"
        value="countdown"
        icon={<HourglassTopIcon sx={iconStyle} />}
        sx={actionStyle}
        disableRipple
      />
      <BottomNavigationAction
        label="Time"
        value="time"
        icon={<ScheduleIcon sx={iconStyle} />}
        sx={actionStyle}
        disableRipple
      />
      <BottomNavigationAction
        label="Message"
        value="message"
        icon={<MessageIcon sx={iconStyle} />}
        sx={actionStyle}
        disableRipple
      />
    </BottomNavigation>
  );
};

export default Navigation;
