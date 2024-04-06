"use client";

import * as React from "react";
import { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const EditMessage = () => {
  const { setMessage, message } = useContext(DataContext);

  return (
    <div className="flex h-[calc(100vh-380px)] w-full flex-col justify-center items-center">
      <form className="flex flex-col gap-4">
        <Label>Message</Label>
        <Textarea
          id="message"
          required
          placeholder="Enter Message Here!"
          className="placeholder:text-gray-500 w-[300px] md:w-[600px]"
          rows={6}
          maxLength={50}
          defaultValue={message.message}
          onChange={(event) => {
            setMessage((prevState) => ({
              ...prevState,
              tempMessage: event?.target.value,
            }));
          }}
        />
      </form>
    </div>
  );
};

export default EditMessage;
