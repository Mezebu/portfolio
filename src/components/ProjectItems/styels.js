import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
}));