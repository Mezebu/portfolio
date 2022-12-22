import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDate = styled(Typography)({
  writingMode: "vertical-rl",
  textOrientation: "upright",
  fontWeight: 800,
  /* position: "relative",
  right: 50,
  top: 10, */
});

export const StyledBannerText = styled(Typography)({
  background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
  backgroundClip: "text",
  color: "transparent",
});

export const StyledBigHeading = styled(Typography)({
  fontSize: "clamp(20px, 6vw, 30px)",
  fontWeight: 700,
  color: "#04bdb0",
});

export const StyledIcon = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "rgba( 255, 255, 255, 0.25 )"
      : "rgba(0, 30, 60, 0.85)",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  padding: 3,
  backdropFilter: "blur(10px)",
}));
