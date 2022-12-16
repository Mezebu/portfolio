import { Box, Fab, Toolbar, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import NavBar from "../Navbar/index";
import { Footer } from "../../Sections";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Toolbar />
      <Container maxWidth="lg">
        <main>{children}</main>
        <ScrollToTop {...children}>
          <Fab size="small" color="info" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
