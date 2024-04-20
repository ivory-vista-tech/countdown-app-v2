"use client";

import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

const HomePage = () => {
  return (
    <section className="flex size-full items-start justify-center">
      <div className="flex size-full max-w-[1440px] flex-col gap-[30px] text-white">
        <Hero />

        <Features />
      </div>
    </section>
  );
};

export default HomePage;
