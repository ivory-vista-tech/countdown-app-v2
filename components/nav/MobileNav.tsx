"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { getIcon, sidebarLinks } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "@mui/icons-material";
import BrandIcon from "./BrandIcon";
import { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";

const MobileNav = () => {
  const pathname = usePathname();
  const { isFullscreen } = useContext(DataContext);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          className={cn({
            "sm:hidden ml-4": !isFullscreen,
            "icon max-sm:hidden": isFullscreen,
          })}
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className={cn(
          "flex w-fit p-0 flex-col justify-between bg-gray-200 dark:bg-[#0D1228] pt-10 text-white backdrop-blur-lg border-x",
          {
            "sm:hidden": !isFullscreen,
            "w-[264px]": isFullscreen,
          }
        )}
      >
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex justify-center mb-10">
            <BrandIcon />
          </div>

          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("flex gap-4 items-center p-2  justify-start", {
                  "bg-primary overflow-hidden border-y border-transparent dark:border-white/[0.2] group-hover:border-slate-700":
                    isActive,
                })}
              >
                <div className="flex gap-4 items-center px-8 py-2 rounded-lg justify-start">
                  {getIcon(item.imgURL)}
                  <p className="text font-medium ">{item.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
