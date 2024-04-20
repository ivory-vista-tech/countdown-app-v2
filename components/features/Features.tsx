"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { features, getIcon } from "../constants";
import { DataContext } from "@/providers/DataProvider";

const Features = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="flex-1 rounded-lg border bg-dark-1 p-2 opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, idx) => {
            const { icon, title, description, link, className } = feature;

            return (
              <div
                key={feature?.title}
                className={`group relative block h-full w-full p-2`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 block h-full w-full rounded-lg bg-neutral-200 dark:bg-slate-800/[0.8]"
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

                <FeatureCard
                  link={link}
                  className={className}
                  icon={icon}
                  description={description}
                  title={title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

export const FeatureCard = ({
  link,
  className,
  icon,
  description,
  title,
}: {
  link: string;
  className: string;
  icon: string;
  description: string;
  title: string;
}) => {
  const { setFeature } = useContext(DataContext);

  return (
    <div
      className={`relative z-20 flex h-[160px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-transparent p-4 backdrop-blur-lg group-hover:border-slate-700 dark:border-white/[0.2] max-lg:gap-2 lg:h-[230px] lg:p-6 ${className}`}
      onClick={() => setFeature(link)}
    >
      <div className="glassmorphism flex size-9 items-center justify-center rounded-lg lg:size-12">
        {getIcon(
          icon,
          `text-[20px] lg:text-[25px] ${className.replace("bg", "text")}`,
        )}
      </div>

      <div className="flex flex-col lg:gap-2">
        <h1 className="fontlg:text-2xl text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
