"use client";

import { cn } from "@/lib/utils";
import { getIcon, sidebarLinks } from "../constants";
import { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";

const Sidebar = () => {
  const { setFeature, feature } = useContext(DataContext);

  return (
    <section className="sticky left-0 top-0 flex flex-col justify-between pt-10 xl:pt-28 max-sm:hidden lg:w-[264px] text-white bg-dark-1 dark:opacity-75 backdrop-blur-lg border-x">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = feature === item.route;

          return (
            <div
              onClick={() => setFeature(item.route)}
              key={item.label}
              className={cn("cursor-pointer", {
                "bg-primary overflow-hidden border-y border-transparent dark:border-white/[0.2] group-hover:border-slate-700":
                  isActive,
                "text-white": isActive,
              })}
            >
              <div className="flex gap-4 items-center px-8 py-4 rounded-lg justify-start">
                {getIcon(item.imgURL)}
                <p className="text-lg font-semibold max-lg:hidden">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
