import { Box } from "@mui/material";
import { StyledDate } from "./styles";

const DateText = () => {
  return (
    <Box>
      <StyledDate
        variant="button"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        ©{new Date().getFullYear()}
      </StyledDate>
    </Box>
  );
};

export default DateText;
