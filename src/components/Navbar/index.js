import { useContext, useState } from "react";
import { IconButton, Toolbar, Tooltip, CssBaseline, Box } from "@mui/material";
import { Squash as Hamburger } from "hamburger-react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import { StyledAppBar, StyledNavLogo } from "./styles";
import { NavLink, StyledToolbar } from "./styles";
import { navLinks } from "./NavData";
import ProgressBar from "../FramerAnimations/ProgressBar";
import MobileMenu from "../MobileMenu/MobileMenu";
import ElevationScroll from "./ElevationScroll";
import ThemeContext from "../../ThemeContext";
import Link from "../../Link";

const NavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const themeTitle =
    theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.1 }}
    >
      <CssBaseline />
      <ElevationScroll {...children}>
        <StyledAppBar color="inherit">
          <ProgressBar />
          <StyledToolbar>
            <StyledNavLogo variant="h5">H.</StyledNavLogo>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ id, page, title }) => (
                <NavLink component={Link} key={id} href={page} underline="none">
                  {title}
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Tooltip title={`${themeTitle} mode`}>
                <IconButton onClick={toggleTheme}>
                  {theme.palette.mode === "dark" ? (
                    <NightsStayRoundedIcon sx={{ fontSize: 20 }} />
                  ) : (
                    <LightModeRoundedIcon sx={{ fontSize: 20 }} />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ mr: 2, display: { md: "none" } }}>
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </Box>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
      {isOpen && (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileMenu {...{ toggleTheme, themeTitle, theme }} />
        </Box>
      )}
    </motion.div>
  );
};

export default NavBar;
