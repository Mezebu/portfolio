import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FlexCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FlexGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FlexSpaceBtween = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const FlexAlignCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const FlexJustifyCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const FlexColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
