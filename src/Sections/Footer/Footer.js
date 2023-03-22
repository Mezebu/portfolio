import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { cyan } from "@mui/material/colors";

import Copyright from "../../components/Copyright/Copyright";
import { Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 2 }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Divider />
        <Box component="footer" sx={{ py: 3, px: 2, mt: "auto" }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
