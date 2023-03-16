import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSkill = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(255, 255, 250, 0.1)",
  padding: 10,
  borderRadius: 4,
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
}));

export const StyledIcon = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  border: "1px solid grey",
  width: 65,
  height: 65,
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    borderColor:
      theme.palette.mode === "light"
        ? theme.palette.info.main
        : theme.palette.secondary.main,
  },
  transition: "all 2s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
}));

export const StyledImage = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  backgroundColor: "rgba(34, 51, 84, 0.02)",
  boxShadow:
    "rgb(34 51 84 / 30%) 0px 1px 4px, rgb(34 51 84 / 10%) 0px 3px 12px 2px",
  width: 55,
  height: 55,
  padding: 8,
  borderRadius: "50%",
  cursor: "pointer",
  ":hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.info.main
        : theme.palette.secondary.main,
  },
}));

export const StyledText = styled(Typography)({
  fontWeight: 700,
  marginLeft: 10,
  fontSize: 12,
});
