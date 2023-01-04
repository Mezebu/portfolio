import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLinks = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
  backgroundColor: "inherit",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#00a79c",
  },
}));
