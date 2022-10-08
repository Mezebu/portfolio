import { Box } from "@mui/material";
import NavBar from "../Navbar/index";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <section>{children}</section>
    </Box>
  );
};

export default Layout;
