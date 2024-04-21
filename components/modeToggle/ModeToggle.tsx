"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }

    return setTheme("light");
  };

  return isClient ? (
    <Button variant="outline" size="icon" onClick={changeTheme}>
      {theme === "light" ? (
        <LightMode className="icon size-5" />
      ) : (
        <DarkMode className="icon size-5" />
      )}
    </Button>
  ) : null;
};

export default ModeToggle;
