import { Toolbar } from "@mui/material";
import NavBar from "../Navbar/index";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <section>{children}</section>
    </>
  );
};

export default Layout;
