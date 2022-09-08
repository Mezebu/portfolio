import React, { Fragment, useContext, useState } from "react";
import { Box, ButtonBase, CssBaseline } from "@mui/material";
import { IconButton, Toolbar, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

import { StyledToolbar, StyledAppBar, StyledNavLogo } from "./styles";
import { HamburgerBtn, NavLink } from "./styles";
import { navLinks } from "./NavData";
import ElevationScroll from "./ElevationScroll";
import ThemeContext from "../../src/ThemeContext";

const NavBar = ({ children }) => {
  const theme = useTheme();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const themeTitle =
    theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...children}>
        <StyledAppBar color="inherit">
          <StyledToolbar>
            <StyledNavLogo variant="h5">Henry</StyledNavLogo>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ id, page, title, offSet }) => (
                <NavLink
                  component={Link}
                  sx={{ mx: 1 }}
                  key={id}
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={offSet}
                  duration={1000}
                >
                  {title}
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <Tooltip title={`${themeTitle} mode`}>
                <IconButton onClick={toggleTheme} sx={{ mx: 1 }}>
                  {theme.palette.mode === "dark" ? (
                    <NightsStayRoundedIcon fontSize="medium" />
                  ) : (
                    <LightModeRoundedIcon fontSize="medium" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <ButtonBase color="inherit" sx={{ mr: 2, display: { md: "none" } }}>
              <HamburgerBtn>
                <Hamburger
                  toggled={isHamburgerOpen}
                  toggle={setIsHamburgerOpen}
                  size={20}
                />
              </HamburgerBtn>
            </ButtonBase>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};

export default NavBar;
