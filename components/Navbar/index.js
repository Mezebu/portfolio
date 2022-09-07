import React, { Fragment } from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import ElevationScroll from "./ElevationScroll";
import { StyledToolbar, StyledAppBar } from "./styles";

const index = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...children}>
        <StyledAppBar color="inherit">
          <StyledToolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Logo
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ mx: 4 }}>Links</Typography>
              <Typography sx={{ mx: 4 }}>Links</Typography>
              <Typography sx={{ mx: 4 }}>Links</Typography>
              <Typography sx={{ mx: 4 }}>Links</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ mx: 1 }}>Actions</Typography>
              <Typography sx={{ mx: 1 }}>Actions</Typography>
            </Box>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};

export default index;
