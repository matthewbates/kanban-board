import Popover from "@mui/material/Popover";

import {
  PopoverContainer,
  PopoverSelect,
  PopoverOption,
} from "./ImportanceElements";

export default function Importance() {
  return (
    <PopoverContainer>
      <PopoverSelect>
        <PopoverOption>High</PopoverOption>
        <PopoverOption>Medium</PopoverOption>
        <PopoverOption>Low</PopoverOption>
      </PopoverSelect>
    </PopoverContainer>
  );
}
