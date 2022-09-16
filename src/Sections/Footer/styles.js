import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
}));
