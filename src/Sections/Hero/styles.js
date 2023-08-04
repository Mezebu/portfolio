import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBigHeading = styled(Typography)({
  fontSize: "clamp(35px, 7vw, 65px)",
  fontWeight: 700,
  "&:hover": {
    background:
      "radial-gradient(circle farthest-corner at top left, #121FCF 0%, #CF1512 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
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
