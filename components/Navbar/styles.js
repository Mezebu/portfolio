import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba( 255, 255, 255, 0.25 )",
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

export const HamburgerBtn = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
}));

export const NavLink = styled(Box)({
  cursor: "pointer",
  "&:hover": {
    borderBottom: "1px solid grey",
  },
  "&.active": {
    color: green[600],
  },
});
