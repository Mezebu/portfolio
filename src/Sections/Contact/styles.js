import { Avatar, Box, Paper } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled(Paper)(({ theme }) => ({
  display: "flex",
  opacity: 0.9,
  "&:hover": {
    opacity: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    position: "relative",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "0px",
    left: "0%",
    transform: "translate(0%,0%)",
    backgroundColor: theme.palette.mode === "light" ? green[900] : green[900],
    visibility: "hidden",
    transition: "all 0.9s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottom: `2px solid ${theme.palette.success.dark}`,
}));
