"use client";

import { DataContext } from "@/providers/DataProvider";
import React, { useContext } from "react";
import { Button } from "../ui/button";

const SetMessage = () => {
  const { setEditMode } = useContext(DataContext);

  return (
    <Button
      onClick={() => {
        setEditMode(true);
      }}
      variant="outline"
      className={"timer-button"}
    >
      SET MESSAGE
    </Button>
  );
};

export default SetMessage;
