"use client";

import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { DataContext } from "@/providers/DataProvider";
import { cn } from "@/lib/utils";

interface ScheduleStepperProps {
  queue: number[];
}

const ScheduleStepper = ({ queue }: ScheduleStepperProps) => {
  const { activeStep } = React.useContext(DataContext);

  return (
    <div className="flex h-[100px] w-full max-w-[1440px] flex-col items-center justify-center">
      <Stepper
        activeStep={activeStep}
        className="mx-[4px] w-full md:mx-[40px] lg:mx-[100px]"
        alternativeLabel
      >
        {queue.map((item, index) => {
          const stepProps: { completed?: boolean } = {};

          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step
              key={index}
              {...stepProps}
              className="flex h-[60px] items-center justify-center"
            >
              <StepLabel {...labelProps}>
                <span
                  className={cn("text-white", {
                    "font-bold text-primary": index === activeStep,
                    "text-dark-2 dark:text-white": index !== activeStep,
                  })}
                >{`${item} ${item === 1 ? "min" : "mins"}`}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default ScheduleStepper;
