import { Avatar, Box, Paper, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export const StyledTab = styled(Tab)(({ theme }) => ({
  padding: 25,
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[600],
    borderRadius: theme.shape.borderRadius,
    color: "#40a9ff",
  },
}));
