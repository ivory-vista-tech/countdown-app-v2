"use client";

import { useState } from "react";
import Features from "@/components/features/Features";
import ScheduleModal from "@/components/schedule/ScheduleModal";

const Home = () => {
  const [schedule, setSchedule] = useState<boolean>(false);

  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-[70px] text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover bg-center">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <p className="text-lg font-medium lg:text-2xl">{date}</p>
        </div>
      </div>

      <Features handleClick={() => setSchedule(true)} />

      <ScheduleModal
        isOpen={schedule}
        onClose={() => {
          setSchedule(false);
        }}
      />
    </section>
  );
};

export default Home;
