import { Button } from "@mui/material";
import React from "react";

interface CustomButtonProps {
    name: string;
    onClick: () => void;
    style?: object;
}

const CustomButton = ({ name, onClick, style }: CustomButtonProps) => {
    return (
        <Button
            variant="contained"
            size="large"
            onClick={onClick}
            sx={{
                ...style,
                ml: 2,
                padding: 3,
            }}
        >
            {name}
        </Button>
    );
};

export default CustomButton;
