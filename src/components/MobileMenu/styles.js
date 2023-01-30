import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  backgroundImage:
    theme.palette.mode === "light"
      ? "radial-gradient( rgba(0, 0, 0, 0) 1px, #EAEAEA 1px)"
      : "radial-gradient( rgba(0, 0, 0, 0) 1px, #001E3C 1px)",
  backgroundSize: " 4px 4px",
  backdropFilter: "blur(3px)",
  fontSize: 14,
  lineHeight: 14,
  zIndex: 2,

  "&::before": {
    display: "block",
    content: `""`,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: "#111111",
    opacity: 0.2,
  },
}));
