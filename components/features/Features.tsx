import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { features, getIcon } from "../constants";
import { DataContext } from "@/providers/DataProvider";

const Features = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
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
      className={`flex flex-col max-lg:gap-2 justify-between h-[160px] lg:h-[230px] backdrop-blur-lg p-4 lg:p-6 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 rounded-lg cursor-pointer ${className}`}
      onClick={() => setFeature(link)}
    >
      <div className="flex justify-center items-center glassmorphism size-9 lg:size-12 rounded-lg">
        {getIcon(
          icon,
          `text-[20px] lg:text-[25px] ${className.replace("bg", "text")}`
        )}
      </div>

      <div className="flex flex-col lg:gap-2">
        <h1 className="text-xl fontlg:text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
