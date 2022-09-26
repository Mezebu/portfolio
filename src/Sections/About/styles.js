import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const StyledAboutWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#D5FAFC" : "#063159",
}));

export const StyledUnderline = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: 5,
});
