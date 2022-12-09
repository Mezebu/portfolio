import { Box, Fab, Toolbar, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import NavBar from "../Navbar/index";
import { Contact } from "../../Sections";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Toolbar />
      <Container maxWidth="lg">
        <main>{children}</main>
        <ScrollToTop {...children}>
          <Fab size="small" color="success" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>
      </Container>
      <Contact />
    </Box>
  );
};

export default Layout;
