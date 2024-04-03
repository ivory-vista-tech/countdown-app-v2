"use client";

import "@/app/globals.css";
import { ReactNode, useContext } from "react";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";
import { DataContext } from "@/providers/DataProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { isFullscreen } = useContext(DataContext);

  return (
    <main className="max-w-screen w-screen h-screen max-h-screen">
      {!isFullscreen && (
        <>
          <Navbar />

          <div className="flex w-screen">
            <Sidebar />

            <section className="flex flex-1 flex-col p-14 justify-start items-center">
              <div className="w-full max-w-[1440px]">{children}</div>
            </section>
          </div>
        </>
      )}

      {isFullscreen && (
        <div className="w-full h-full min-h-full min-w-full bg-white dark:bg-dark-2 flex flex-col justify-center">
          {children}
        </div>
      )}
    </main>
  );
};

export default RootLayout;
