import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "black" : theme.palette.divider,
}));
