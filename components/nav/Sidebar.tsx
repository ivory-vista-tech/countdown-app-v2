"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getIcon, sidebarLinks } from "../constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-[calc(100vh-67px)] w-fit flex-col justify-between bg-gray-200 dark:bg-[#0D1228] p-6 pt-28 text-gray-800 dark:text-white max-sm:hidden lg:w-[264px] opacity-75 backdrop-blur-lg border-x">
      <div className="flex flex-1 flex-col gap-6">
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
                  "text-white": isActive,
                }
              )}
            >
              {getIcon(item.imgURL)}
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
