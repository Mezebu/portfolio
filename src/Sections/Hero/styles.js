import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBigHeading = styled(Typography)({
  fontSize: "clamp(40px, 7vw, 70px)",
  fontWeight: 700,
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
