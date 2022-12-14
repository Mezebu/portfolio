import { Box, Card, Paper, Tab } from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import TabPanel from "./TabPanel";

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,

  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[600],
    borderRadius: theme.shape.borderRadius,
    color:
      theme.palette.mode === "light"
        ? theme.palette.success.light
        : theme.palette.common.white,
  },
}));

export const StyledTabContainer = styled(Paper)(({ theme }) => ({
  height: "100%",
}));
