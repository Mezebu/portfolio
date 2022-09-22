import { Box, Container, Toolbar } from "@mui/material";
import Copyright from "../Copyright/Copyright";
import NavBar from "../Navbar/index";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Container maxWidth="lg">
        <section>{children}</section>
      </Container>
      <Copyright />
    </>
  );
};

export default Layout;
