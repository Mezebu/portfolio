import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { StyledFooter, StyledTypography } from "./styles";
import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <Container>
      <StyledFooter sx={{ my: 5 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, textTransform: "capitalize" }}
            align="center"
            gutterBottom
          >
            Send me a message
          </Typography>
          <StyledTypography variant="h4" align="center">
            mezebu07@gmail.com
          </StyledTypography>
        </Box>
      </StyledFooter>
    </Container>
  );
}
