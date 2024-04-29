import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";
import { DataContext, TimeItems } from "@/providers/DataProvider";
import { getMilliseconds } from "@/utils/functions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface HandlePlayToggleProps {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  setTimeItems: React.Dispatch<React.SetStateAction<TimeItems>>;
  timeItems: TimeItems;
}

export const handlePlayToggle = ({
  setIsPlaying,
  isPlaying,
  setEditMode,
  editMode,
  setTimeItems,
  timeItems,
}: HandlePlayToggleProps) => {
  if (canTogglePlay({ editMode, timeItems })) {
    setIsPlaying(!isPlaying);

    if (editMode) {
      setTimeItems((prevState) => ({
        ...prevState,
        totalMilliseconds: getMilliseconds(timeItems),
      }));

      setEditMode(!editMode);
    }
  }
};

const canTogglePlay = ({
  editMode,
  timeItems,
}: {
  editMode: boolean;
  timeItems: TimeItems;
}) => {
  if (!editMode) return true;

  const { hours, minutes, seconds } = timeItems;
  return hours !== 0 || minutes !== 0 || seconds !== 0;
};

const PlayAndPause = () => {
  const {
    isPlaying,
    setIsPlaying,
    editMode,
    setEditMode,
    timeItems,
    setTimeItems,
  } = useContext(DataContext);

  return (
    <Tooltip>
      <TooltipTrigger>
        <IconButton
          onClick={() =>
            handlePlayToggle({
              setIsPlaying,
              isPlaying,
              setEditMode,
              editMode,
              setTimeItems,
              timeItems,
            })
          }
        >
          {isPlaying ? (
            <PauseCircleOutlineIcon className="icon" />
          ) : (
            <PlayCircleOutlineIcon className="icon" />
          )}
        </IconButton>
      </TooltipTrigger>

      <TooltipContent>
        <p>{isPlaying ? "Pause (Spacebar)" : "Play (Spacebar)"}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default PlayAndPause;
