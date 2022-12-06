import { Box, Fab, Toolbar, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import NavBar from "../Navbar/index";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

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
    </Box>
  );
};

export default Layout;
