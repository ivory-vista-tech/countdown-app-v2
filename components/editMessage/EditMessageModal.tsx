"use client";

import * as React from "react";
import { useContext } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataContext } from "@/providers/DataProvider";
import RichTextEditor from "./RichTextEditor";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { ModalProps } from "../schedule/ScheduleModal";

const EditMessageModal = ({ isOpen, onClose }: ModalProps) => {
  const {
    setMessage,
    message: { message },
  } = useContext(DataContext);

  const formSchema = z.object({
    message: z.string().min(5, { message: "Message is too short!" }).trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      message,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setMessage((prevValues) => ({
      ...prevValues,
      message: values.message,
    }));

    reset();

    onClose();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="text-light-1 flex flex-col gap-6 border-none px-6 py-9 dark:text-white md:min-w-[600px] xl:min-w-[800px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold leading-[42px]">Set new message</h1>

          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <RichTextEditor
                        message={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className={
                  "bg-blue-1  text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                }
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditMessageModal;
