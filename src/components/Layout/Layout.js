import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box component="main">
      <section>{children}</section>
    </Box>
  );
};

export default Layout;
