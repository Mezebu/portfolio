import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  background: "rgba( 255, 255, 255, 0.25 )",
  backdropFilter: "blur(4px)",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
