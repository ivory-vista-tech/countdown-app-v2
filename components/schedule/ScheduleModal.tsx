"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Form } from "../ui/form";
import { useToast } from "../ui/use-toast";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "../ui/input";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

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
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      sessions: [{ duration: "" }],
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
      title: "Success",
      description: "Event created!",
    });
  };

  const onSubmit = async (values: FormValues) => {
    console.log(values);

    showToast();

    reset();
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
                  Sessions{" "}
                  <span className="text-gray-600 text-sm">(in minutes)</span>
                </label>
                <div>
                  {fields.map((field, index) => (
                    <div
                      className="form-control flex gap-2 justify-center items-center"
                      key={field.id}
                    >
                      <Input
                        className="my-2"
                        type="number"
                        required
                        {...register(`sessions.${index}.duration` as const)}
                      />

                      {index > 0 && (
                        <IconButton
                          className="p-0"
                          onClick={() => remove(index)}
                        >
                          <Close className="text-white p-2 size-10 hover:bg-dark-3" />
                        </IconButton>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-center items-center">
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
