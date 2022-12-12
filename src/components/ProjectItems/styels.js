import { Paper, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,

  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.shape.borderRadius,
  },
}));

export const StyledTabContainer = styled(Paper)(({ theme }) => ({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 4px )",
  WebkitBackdropFilter: "blur(4px)",
}));
