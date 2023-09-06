import { Popover, Typography } from "@mui/material";

import { PopoverContainer } from "./PopoverElements";

export default function BasicPopover() {
  return (
    // <PopoverContainer>
    <Popover>
      <Typography sx={{ p: 2 }}>The content of the popover</Typography>
    </Popover>
    // </PopoverContainer>
  );
}
