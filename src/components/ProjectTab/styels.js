import { Paper, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,

  "&:hover": {
    color: theme.palette.primary.light,
    opacity: 1,
  },
  "&.Mui-selected": {
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.grey[300] : "#112240",
    borderRadius: theme.shape.borderRadius,
    color:
      theme.palette.mode === "light"
        ? theme.palette.primary.dark
        : theme.palette.common.white,
  },
}));

export const StyledTabContainer = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.11)"
      : theme.palette.background.paper,
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(4.4px)",
  WebkitBackdropFilter: "blur(4px)",
  border:
    theme.palette.mode === "light"
      ? "1px solid rgba(255, 255, 255, 0.3)"
      : `1px solid ${theme.palette.divider}`,
}));
