import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Copyright from "../../components/Copyright/Copyright";
import { Divider } from "@mui/material";
import { FlexCenter } from "../../../styles/globalStyles";

export default function Footer() {
  return (
    <Box sx={{ mt: 5 }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Divider />
        <FlexCenter
          component="footer"
          sx={{ height: { xs: "10vh", sm: "20vh" } }}
        >
          <Copyright />
        </FlexCenter>
      </Container>
    </Box>
  );
}
