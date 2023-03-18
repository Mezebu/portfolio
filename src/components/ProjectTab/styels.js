import { Paper, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,

  "&:hover": {
    color: theme.palette.primary.dark,
    opacity: 1,
  },
  "&.Mui-selected": {
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.grey[300] : "#112240",
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
