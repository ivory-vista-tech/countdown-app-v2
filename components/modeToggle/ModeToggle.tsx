"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
    <Tooltip>
      <TooltipTrigger
        onClick={changeTheme}
        className="border-1 flex items-center justify-center rounded-lg border p-2"
      >
        {theme === "light" ? (
          <LightMode className="icon size-5" />
        ) : (
          <DarkMode className="icon size-5" />
        )}
      </TooltipTrigger>

      <TooltipContent>
        <p>{theme === "light" ? "Set to Dark Mode" : "Set to Light Mode"}</p>
      </TooltipContent>
    </Tooltip>
  ) : null;
};

export default ModeToggle;
