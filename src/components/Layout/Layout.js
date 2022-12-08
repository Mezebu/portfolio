import { Box, Fab, Toolbar, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import NavBar from "../Navbar/index";

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
