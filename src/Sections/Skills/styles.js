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
  borderColor:
    theme.palette.mode === "light" ? red[200] : theme.palette.primary,
  borderRadius: "50%",
  borderStyle: "solid",
  borderWidth: 1,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#073763",
  width: 150,
  height: 150,
  opacity: 0.8,
  transition: "all 0.4s ease-out",
  "&:hover": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "light" ? grey[200] : blue[900],
  },
}));

export const StyledText = styled(Typography)({
  lineHeight: 5,
  fontWeight: 800,
});
