import React from "react";
import Copyright from "../../src/Copyright";

import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <section>{children}</section>
      </main>
      <Copyright />
    </>
  );
};

export default Layout;
