"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext } from "react";
import CustomModifier from "../customized/CustomModifier";

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
    <CustomModifier
      condition={editMode && feature === "message"}
      buttonName={buttonName}
      handleClose={handleClose}
      handleButtonClick={handleConfirm}
      style={{ display: feature === "message" ? "block" : "none" }}
    />
  );
};

export default SetMessage;
