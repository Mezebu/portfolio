import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "rgba( 255, 255, 255, 0.25 )"
      : "rgba(0, 30, 60, 0.85)",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  padding: 3,
  backdropFilter: "blur(10px)",
  width: "95%",
  left: "50%",
  transform: "translateX(-50%)",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const StyledNavLogo = styled(Typography)({
  fontFamily: "Nosifer",
  background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
  backgroundClip: "text",
  color: "transparent",
});

export const NavLink = styled(Box)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
  display: "inline-block",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: 500,
  marginRight: 15,
  position: "relative",
  transition: "all 0.7s ease-in-out",
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "0%",
    transform: "translate(0%,0%)",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.getContrastText(purple[100])
        : theme.palette.getContrastText(purple[400]),
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
  "&.active": {
    color: green[600],
  },
}));

export const ContactButton = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
  transition: "all 0.7s ease-in-out",
  textTransform: "none",
  "&:hover": {
    position: "relative",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "0%",
    transform: "translate(0%,0%)",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.getContrastText(purple[100])
        : theme.palette.getContrastText(purple[400]),
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
}));
