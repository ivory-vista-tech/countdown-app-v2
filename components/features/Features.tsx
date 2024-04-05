import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { features, getIcon } from "../constants";
import { useRouter } from "next/navigation";

const Features = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {features.map((feature, idx) => {
        const { icon, title, description, link, className } = feature;

        return (
          <div
            key={feature?.title}
            className={`relative group block p-2 h-full w-full`}
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
              className={`flex flex-col justify-between  min-h-[230px] backdrop-blur-lg p-6 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 rounded-lg cursor-pointer ${className}`}
              onClick={() => router.push(`/${link}`)}
            >
              <div className="flex justify-center items-center glassmorphism size-12 rounded-lg">
                {getIcon(icon, className.replace("bg", "text"))}
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-normal">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
