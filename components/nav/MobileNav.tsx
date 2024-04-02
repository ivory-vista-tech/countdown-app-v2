"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { getIcon, sidebarLinks } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "@mui/icons-material";
import BrandIcon from "./BrandIcon";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="ml-4 sm:hidden" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-fit sm:hidden flex-col justify-between bg-gray-200 dark:bg-[#0D1228] p-6 pt-10 text-white backdrop-blur-lg border-x"
      >
        <div className="flex flex-1 flex-col gap-6">
          <div className="mb-10">
            <BrandIcon />
          </div>

          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "flex gap-4 items-center p-4 rounded-lg justify-start",
                  {
                    "bg-primary": isActive,
                  }
                )}
              >
                {getIcon(item.imgURL)}
                <p className="text-lg font-semibold ">{item.label}</p>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
