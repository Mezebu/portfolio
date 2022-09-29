import { Avatar, Box, Paper } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledContactSection = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(182, 137, 115)" : "rgb(71, 45, 45)",
}));

export const StyledFooter = styled(Paper)(({ theme }) => ({
  display: "flex",
  opacity: 0.9,
  position: "relative",
  "&:hover": {
    opacity: 1,
    position: "relative",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "0px",
    left: "0%",
    transform: "translate(0%,0%)",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.error.light
        : theme.palette.info.light,
    visibility: "hidden",
    transition: "all 0.6s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(112, 79, 79)" : "rgb(167, 121, 121)",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottom:
    theme.palette.mode === "light"
      ? `2px solid ${theme.palette.error.light}`
      : `2px solid ${theme.palette.info.light}`,
}));
