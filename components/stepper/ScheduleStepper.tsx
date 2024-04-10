import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { DataContext } from "@/providers/DataProvider";

interface ScheduleStepperProps {
  queue: number[];
}

const ScheduleStepper = ({ queue }: ScheduleStepperProps) => {
  const { activeStep } = React.useContext(DataContext);

  return (
    <div className="w-full h-[100px]">
      <Stepper
        activeStep={activeStep}
        className="mx-[4px] md:mx-[40px] lg:mx-[100px] flex flex-wrap"
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
              className="h-[60px] flex justify-center items-center"
            >
              <StepLabel {...labelProps}>
                <span className="text-white italic">{`${item} min(s)`}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default ScheduleStepper;
