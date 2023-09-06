import { Popover, Typography } from "@mui/material";

import {
  PopoverContainer,
  PopoverWrapper,
  PopoverSelect,
  PopoverOption,
} from "./ImportanceElements";

export default function Importance() {
  return (
    // <PopoverContainer>
    //   <PopoverWrapper>
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
    //   </PopoverWrapper>
    // </PopoverContainer>
  );
}
