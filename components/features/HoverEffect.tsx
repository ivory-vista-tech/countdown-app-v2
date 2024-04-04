import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getIcon } from "../constants";
import { useRouter } from "next/navigation";

interface HomeCardProps {
  className?: string;
  setSchedule: () => void;
}

export const HoverEffect = ({ className, setSchedule }: HomeCardProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const features = [
    {
      icon: "AutoAwesome",
      title: "Auto Pilot",
      description: "Schedule an event",
      handleClick: () => setSchedule(),
    },
    {
      icon: "HourglassTop",
      title: "Countdown",
      description: "Set a countdown",
      handleClick: () => router.push("/countdown"),
    },
    {
      icon: "AccessTime",
      title: "Time",
      description: "Display current time",
      handleClick: () => router.push("/time"),
    },
    {
      icon: "StickyNote2",
      title: "Message",
      description: "Display a message",
      handleClick: () => router.push("/message"),
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {features.map((feature, idx) => {
        const { icon, title, description, handleClick } = feature;

        return (
          <div
            key={feature?.title}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <div
              className={cn(
                "flex flex-col justify-between bg-dark-3 opacity-90 min-h-[230px] backdrop-blur-lg p-6 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 rounded-[14px] cursor-pointer"
              )}
              onClick={handleClick}
            >
              <div className="flex justify-center items-center glassmorphism size-12 rounded-[10px]">
                {getIcon(icon)}
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-normal text-gray-500">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
