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
