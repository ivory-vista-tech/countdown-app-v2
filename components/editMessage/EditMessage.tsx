"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { DataContext } from "@/providers/DataProvider";

const EditMessage = () => {
  const { setMessage, message } = useContext(DataContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage((prevState) => ({
      ...prevState,
      tempMessage: event?.target.value,
    }));
  };

  return (
    <Box
      component="form"
      className="h-[calc(100vh-280px)] flex justify-center items-center"
      sx={{
        "& > :not(style)": {
          width: { xs: "40ch", sm: "55ch", md: "70ch", lg: "100ch" },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        placeholder="Enter Message Here!"
        defaultValue={message.message}
        multiline
        rows={10}
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        }}
      />
    </Box>
  );
};

export default EditMessage;
