import { Tab } from "@mui/material";
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
