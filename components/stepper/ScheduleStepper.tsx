import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { DataContext } from "@/providers/DataProvider";

interface ScheduleStepperProps {
  queueSize: number;
}

const ScheduleStepper = ({ queueSize }: ScheduleStepperProps) => {
  const { activeStep, setActiveStep } = React.useContext(DataContext);
  const items = new Array(queueSize).fill("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="w-full h-[100px]">
      <Stepper activeStep={activeStep}>
        {items.map((_, index) => {
          const stepProps: { completed?: boolean } = {};

          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps} />
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default ScheduleStepper;
