import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledProgressBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 2,
  background:
    theme.palette.mode === "light"
      ? theme.palette.success.main
      : theme.palette.info.light,
  transformOrigin: "0%",
}));
