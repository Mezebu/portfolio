import { AppBar, Toolbar, Typography, Box, Button, Paper } from "@mui/material";
import { purple } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

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
  fontWeight: 600,
  fontSize: 14,
  marginRight: 15,
  marginLeft: 15,
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
    transition: "all 0.5s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
  "&.active": {
    color: "#00a79c",
  },
}));

export const StyledMobileMenu = styled(Paper)(({ theme }) => ({
  width: { xs: "70%", sm: "50%" },
  zIndex: 1200,
  position: "fixed",
  right: 60,
  top: 75,
  display: { xs: "block", md: "none" },
  bgcolor: "background.paper",
  mt: 2,
  transformOrigin: { horizontal: "right", vertical: "top" },
  anchorOrigin: { horizontal: "right", vertical: "bottom" },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 24,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 1200,
  },
}));
