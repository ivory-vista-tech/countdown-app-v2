"use client";

import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

const HomePage = () => {
  return (
    <section className="flex justify-center items-start size-full">
      <div className="flex size-full flex-col gap-[30px] text-white max-w-[1440px]">
        <Hero />

        <Features />
      </div>
    </section>
  );
};

export default HomePage;
