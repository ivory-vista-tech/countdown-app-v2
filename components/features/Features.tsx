"use client";

import React from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const Features = ({ handleClick }: { handleClick: () => void }) => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
      <HomeCard
        icon="AutoAwesome"
        title="Auto Pilot"
        description="Schedule an event"
        handleClick={handleClick}
      />
      <HomeCard
        icon="HourglassTop"
        title="Countdown"
        description="Set a countdown"
        className="bg-blue-1"
        handleClick={() => router.push("/countdown")}
      />
      <HomeCard
        icon="AccessTime"
        title="Time"
        description="Display current time"
        className="bg-purple-1"
        handleClick={() => router.push("/time")}
      />
      <HomeCard
        icon="StickyNote2"
        title="Message"
        description="Display a message"
        className="bg-yellow-1"
        handleClick={() => router.push("/message")}
      />
    </section>
  );
};

export default Features;
