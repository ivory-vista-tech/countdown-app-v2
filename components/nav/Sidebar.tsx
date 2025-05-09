"use client";

import { cn } from "@/lib/utils";
import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";
import { getIcon, sidebarLinks } from "../constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Sidebar = () => {
  const { setFeature, feature } = useContext(DataContext);

  return (
    <section className="sticky left-0 top-0 flex flex-col justify-between border-x bg-light-2 pt-10 text-white backdrop-blur-lg dark:bg-dark-1 dark:opacity-75 max-sm:hidden lg:w-[264px] xl:pt-28">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = feature === item.route;

          return (
            <Tooltip key={item.label}>
              <TooltipTrigger>
                <div
                  onClick={() => setFeature(item.route)}
                  className={cn("cursor-pointer", {
                    "overflow-hidden border-y border-transparent bg-primary text-white group-hover:border-slate-700 dark:border-white/[0.2]":
                      isActive,
                  })}
                >
                  <div className="flex items-center justify-start gap-4 rounded-lg px-8 py-4">
                    {getIcon(item.imgURL)}
                    <p className="text-lg font-semibold max-lg:hidden">
                      {item.label}
                    </p>
                  </div>
                </div>
              </TooltipTrigger>

              <TooltipContent>
                <p>{`${item.label} (Ctrl+Shift+${item.label[0]})`}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
