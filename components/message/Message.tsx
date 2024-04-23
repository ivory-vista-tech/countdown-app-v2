"use client";

import React, { useContext } from "react";
import parse from "html-react-parser";
import { DataContext } from "@/providers/DataProvider";
import EditMessageModal from "../editMessage/EditMessageModal";

const Message = () => {
  const {
    message: { message },
    editMode,
    setEditMode,
    feature,
  } = useContext(DataContext);

  return editMode ? (
    <EditMessageModal
      isOpen={editMode && feature === "message"}
      onClose={() => {
        setEditMode(false);
      }}
    />
  ) : (
    <div className="m-auto h-full w-full max-w-[1440px]">
      <article className="prose lg:prose-xl dark:prose-invert prose-headings:font-inter flex h-full min-w-full flex-col justify-center leading-tight">
        {parse(message)}
      </article>
    </div>
  );
};

export default Message;
