import { Box, Container, Toolbar } from "@mui/material";
import Copyright from "../Copyright/Copyright";
import NavBar from "../Navbar/index";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <section>{children}</section>
      <Copyright />
    </>
  );
};

export default Layout;
