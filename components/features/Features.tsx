"use client";

import { DataContext } from "@/providers/DataProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { features, getIcon } from "../constants";

const Features = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="flex-1 rounded-lg border bg-light-4/80 p-2 shadow-sm dark:bg-dark-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
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
                      className="absolute inset-0 block h-full w-full rounded-lg bg-white/80 shadow-lg dark:bg-slate-800/[0.8]"
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
      className={`relative z-20 flex h-[160px] cursor-pointer flex-col justify-between overflow-hidden 
      rounded-lg border border-transparent p-4 backdrop-blur-lg 
      group-hover:border-primary/20 group-hover:shadow-md
      dark:border-white/[0.2] max-lg:gap-2 lg:h-[230px] lg:p-6 
      ${className} hover:bg-opacity-90`}
      onClick={() => setFeature(link)}
    >
      <div
        className="glassmorphism flex size-12 items-center justify-center rounded-lg 
        border-primary/10 bg-white shadow-md 
        transition-all duration-300 
        group-hover:scale-110 group-hover:border-primary/30 
        group-hover:shadow-lg dark:bg-dark-2 
        lg:size-16"
      >
        {getIcon(
          icon,
          `text-[24px] lg:text-[32px] text-foreground ${className.replace("bg", "text")} 
          font-bold group-hover:opacity-100`,
        )}
      </div>

      <div className="flex flex-col lg:gap-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};
