"use client";

import { useState } from "react";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import Features from "@/components/features/Features";

const HomePage = () => {
  const [schedule, setSchedule] = useState<boolean>(false);

  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex justify-center items-start size-full">
      <div className="flex size-full flex-col gap-[30px] text-white max-w-[1440px]">
        <div className="h-[303px] w-full rounded-lg bg-hero bg-cover bg-center hidden xl:block">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <p className="text-lg font-medium lg:text-2xl">{date}</p>
          </div>
        </div>

        <div>
          <Features />
        </div>

        <ScheduleModal
          isOpen={schedule}
          onClose={() => {
            setSchedule(false);
          }}
        />
      </div>
    </section>
  );
};

export default HomePage;
