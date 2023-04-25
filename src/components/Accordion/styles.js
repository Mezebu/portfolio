import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAccordion = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${
    theme.palette.mode === "light" ? "#000" : theme.palette.divider
  }`,
  borderBottom: `1px solid ${
    theme.palette.mode === "light" ? "#000" : theme.palette.divider
  }`,
  cursor: "pointer",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
}));
