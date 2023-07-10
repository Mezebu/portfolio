import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLinks = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: `1px solid ${theme.palette.divider}`,
  marginTop: 8,
  padding: 12,
  textTransform: "none",
  "&:hover": {
    borderColor: theme.palette.mode,
  },
}));

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
