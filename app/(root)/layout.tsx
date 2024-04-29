"use client";

import "@/app/globals.css";
import { ReactNode, useContext } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";
import { DataContext } from "@/providers/DataProvider";
import { handlePlayToggle } from "@/components/buttons/PlayAndPause";
import { toggleReset } from "@/components/buttons/Reset";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const {
    isFullscreen,
    setFeature,
    setIsFullscreen,
    setIsPlaying,
    isPlaying,
    setEditMode,
    editMode,
    setTimeItems,
    timeItems,
    setActiveStep,
    feature,
  } = useContext(DataContext);

  useHotkeys("ctrl+shift+h", () => setFeature("home"));
  useHotkeys("ctrl+shift+a", () => setFeature("auto-pilot"));
  useHotkeys("ctrl+shift+c", () => setFeature("countdown"));
  useHotkeys("ctrl+shift+t", () => setFeature("time"));
  useHotkeys("ctrl+shift+m", () => setFeature("message"));
  useHotkeys("ctrl+shift+f", () => setIsFullscreen(!isFullscreen));
  useHotkeys("ctrl+shift+r", () =>
    toggleReset({ setIsPlaying, setTimeItems, setActiveStep, timeItems }),
  );
  useHotkeys("space", () => {
    if (feature === "auto-pilot") {
      return;
    }

    return handlePlayToggle({
      setIsPlaying,
      isPlaying,
      setEditMode,
      editMode,
      setTimeItems,
      timeItems,
    });
  });

  return (
    <main>
      {!isFullscreen && (
        <div className="flex min-h-screen flex-col  xl:h-screen">
          <Navbar />

          <div className="flex size-full flex-1">
            <Sidebar />

            <section className="flex flex-1 flex-col items-center justify-center p-5">
              <div className="h-full min-h-full w-full max-w-[1440px]">
                {children}
              </div>
            </section>
          </div>
        </div>
      )}

      {isFullscreen && (
        <div className="flex h-screen w-full min-w-full flex-col justify-center ">
          {children}
        </div>
      )}
    </main>
  );
};

export default RootLayout;
