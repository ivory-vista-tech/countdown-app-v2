"use client";

import { cn } from "@/lib/utils";
import { getIcon } from "../constants";
interface HomeCardProps {
  className?: string;
  icon: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  icon,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "bg-orange-1 p-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center glassmorphism size-12 rounded-[10px]">
        {getIcon(icon)}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
