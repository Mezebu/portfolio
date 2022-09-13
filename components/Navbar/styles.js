import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { green } from "@mui/material/colors";
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

export const NavLink = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: 500,
  marginRight: 15,

  "&:hover": {
    borderBottom: "1px solid white",
    backgroundImage: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
    backgroundSize: "200% 100%",
    backgroundPosition: "-100%",
    display: "inline-block",
    position: "relative",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "all 0.3s ease-in-out",

    "&::before": {
      content: null,
      background: "#54b3d6",
      display: "block",
      position: "absolute",
      bottom: "-3px",
      left: 0,
      width: 0,
      height: "3px",
      transition: "all 0.3s ease-in-out",
    },
  },

  "&.active": {
    color: green[300],
    borderBottom: "1px solid green",
  },
});
