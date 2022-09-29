import { Avatar, Box, Typography } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const SkillsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const StyledAvatar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "8px 8px 20px #e4ddcc,-8px -8px 20px #fffff4",

  borderRadius: 12,

  backgroundColor:
    theme.palette.mode === "light" ? "rgb(250, 243, 224)" : "#073763",
  width: 130,
  height: 130,
  opacity: 0.8,
  transition: "all 0.4s ease-out",
  "&:hover": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "light" ? grey[200] : blue[900],
  },
}));

export const StyledText = styled(Typography)({
  lineHeight: 4,
  fontWeight: 700,
  fontSize: 11,
});
