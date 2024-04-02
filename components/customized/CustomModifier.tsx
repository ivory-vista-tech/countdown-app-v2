import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { iconButtonStyle } from "../constants/styles";
import CustomButton from "./CustomButton";

interface CustomModifierProps {
  condition: boolean;
  buttonName: string;
  handleClose: () => void;
  handleButtonClick: () => void;
  style: React.CSSProperties;
}

const CustomModifier: React.FC<CustomModifierProps> = ({
  condition,
  buttonName,
  handleClose,
  handleButtonClick,
  style,
}: CustomModifierProps) => {
  return (
    <>
      {condition && (
        <IconButton onClick={handleClose}>
          <CloseIcon sx={iconButtonStyle} />
        </IconButton>
      )}

      <CustomButton
        name={buttonName}
        onClick={handleButtonClick}
        style={style}
      />
    </>
  );
};

export default CustomModifier;
