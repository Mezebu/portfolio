import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  borderBottom: "3px solid",
  borderBottomColor: theme.palette.error.dark,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  opacity: 0.9,
  lineHeight: 5,
  "&:hover": {
    borderBottom: "3px solid yellow",
    opacity: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
}));
