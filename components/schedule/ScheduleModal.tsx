"use client";

import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Form } from "../ui/form";
import { useToast } from "../ui/use-toast";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "../ui/input";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { cn } from "@/lib/utils";
import { getMilliseconds } from "@/utils/functions";
import { DataContext } from "@/providers/DataProvider";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  sessions: {
    duration: number | "";
  }[];
};

const ScheduleModal = ({ isOpen, onClose }: MeetingModalProps) => {
  const [isClient, setIsClient] = useState(false);
  const { timeItems, setTimeItems, setActiveStep } = useContext(DataContext);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      sessions: [{ duration: "" }, { duration: "" }],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "sessions",
    control,
  });

  const showToast = () => {
    toast({
      title: "Created successfully",
      description: "Click the Play button to start!",
    });
  };

  const onSubmit = async (values: FormValues) => {
    const { sessions } = values || {};
    if (!sessions) return;

    const { converted, queue } = sessions.reduce(
      (acc, { duration }) => {
        const durationNumber = Number(duration);
        const milliseconds = getMilliseconds({
          hours: 0,
          minutes: durationNumber,
          seconds: 0,
        });

        acc.converted.push(milliseconds);
        acc.queue.push(durationNumber);

        return acc;
      },
      { converted: [] as number[], queue: [] as number[] }
    );

    setTimeItems({
      ...timeItems,
      autoMode: true,
      totalMilliseconds: converted[0],
      workQueue: converted,
      stepperQueue: queue,
    });

    setActiveStep(0);

    showToast();
    reset();
    onClose();
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none  px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold leading-[42px]">
            Create a Program
          </h1>

          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <div>
                <label>
                  Enter Sessions duration{" "}
                  <span className="text-gray-600 text-sm">(in minutes)</span>
                </label>
                <div>
                  {fields.map((field, index) => (
                    <div
                      className="form-control flex gap-2 justify-center items-center"
                      key={field.id}
                    >
                      <Input
                        className="my-2 placeholder-gray-600"
                        type="number"
                        placeholder={`Session ${index + 1}`}
                        required
                        {...register(`sessions.${index}.duration`)}
                      />

                      {
                        <IconButton
                          className="p-0"
                          onClick={index > 0 ? () => remove(index) : () => {}}
                        >
                          <Close
                            className={cn("p-2 size-10 hover:bg-dark-3", {
                              "text-white": index > 1,
                              "text-opacity-0": index <= 1,
                            })}
                          />
                        </IconButton>
                      }
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4  items-center">
                <Button
                  type="button"
                  variant="outline"
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
                  onClick={() => append({ duration: "" })}
                >
                  Add Session
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    "bg-blue-1  focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
                  }
                >
                  {isSubmitting ? "Creating Event" : "Create Event"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default ScheduleModal;
