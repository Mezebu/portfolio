import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "inherit",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#00a79c",
  },
}));

export const StyledIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  marginRight: 10,
  marginTop: 5,
  height: 35,
  width: 35,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[400]
      : theme.palette.primary.dark,
  cursor: "pointer",
  "&:hover": {
    borderColor: "#00a79c",
  },
}));
