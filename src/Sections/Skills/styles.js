import { Avatar, Box, Button, Typography } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const SkillsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const StyledAvatar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backdropFilter: "blur(8px)",
  background: "rgba(255, 255, 255, 0.3)",
  padding: 10,
  borderRadius: 4,
}));

export const StyledIcon = styled(Button)({
  boxSizing: " border-box",
  WebkitTapHighlightColor: "transparent",
  outline: 0,
  border: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  textDecoration: "none",
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: "1.5rem",
  overflow: "visible",
  padding: 8,
  backgroundColor: "rgba(34, 51, 84, 0.02)",
  color: "rgb(85, 105, 255)",
  width: "72px",
  height: "72px",
  borderRadius: "50px",
  boxShadow:
    "rgb(34 51 84 / 30%) 0px 1px 4px, rgb(34 51 84 / 10%) 0px 3px 12px 2px",
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  position: "relative",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
});

export const StyledText = styled(Typography)({
  lineHeight: 4,
  fontWeight: 700,
  marginLeft: 10,
  fontSize: 12,
});
