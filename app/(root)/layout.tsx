"use client";

import "@/app/globals.css";
import { ReactNode, useContext } from "react";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";
import { DataContext } from "@/providers/DataProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { isFullscreen } = useContext(DataContext);

  return (
    <main>
      {!isFullscreen && (
        <div className="xl:h-screen flex flex-col">
          <Navbar />

          <div className="flex flex-1 h-full w-full">
            <Sidebar />

            <section className="flex flex-1 flex-col p-7 justify-center items-center">
              <div className="w-full max-w-[1440px] h-full min-h-full">
                {children}
              </div>
            </section>
          </div>
        </div>
      )}

      {isFullscreen && (
        <div className="h-screen flex flex-col w-full min-w-full bg-white dark:bg-dark-2 justify-center">
          {children}
        </div>
      )}
    </main>
  );
};

export default RootLayout;
