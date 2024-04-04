"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SetMessage = () => {
  const { feature, editMode, setEditMode, setMessage } =
    useContext(DataContext);

  const handleConfirm = () => {
    if (editMode) {
      setMessage((prevState) => ({
        ...prevState,
        message: prevState.tempMessage,
      }));
    }

    setEditMode(!editMode);
  };

  const handleClose = () => {
    setEditMode(!editMode);
  };

  const buttonName = editMode ? "Confirm" : "Set Message";

  return (
    <>
      {editMode && feature === "message" && (
        <IconButton onClick={handleClose}>
          <CloseIcon className="icon" />
        </IconButton>
      )}

      <Button
        type="submit"
        onClick={handleConfirm}
        className={
          "bg-blue-1 p-[30px] focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
        }
      >
        {buttonName.toUpperCase()}
      </Button>
    </>
  );
};

export default SetMessage;
