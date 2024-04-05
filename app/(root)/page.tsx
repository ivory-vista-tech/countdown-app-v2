"use client";

import { useState } from "react";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import Features from "@/components/features/Features";

const Home = () => {
  const [schedule, setSchedule] = useState<boolean>(false);

  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-[60px] text-white">
      <div className="h-[303px] w-full rounded-lg bg-hero bg-cover bg-center">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <p className="text-lg font-medium lg:text-2xl">{date}</p>
        </div>
      </div>

      <div className="bg-dark-1 opacity-90 border p-2  rounded-lg">
        <Features />
      </div>

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
