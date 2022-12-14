import { useContext, useState } from "react";
import { ButtonBase, Toolbar, Tooltip } from "@mui/material";
import { Squash as Hamburger } from "hamburger-react";
import { Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import { StyledToolbar, StyledAppBar, StyledNavLogo } from "./styles";
import { ContactButton, NavLink, ActionIcons } from "./styles";
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
            <StyledNavLogo variant="h5">Henry</StyledNavLogo>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ id, page, title }) => (
                <NavLink component={Link} key={id} href={page} underline="none">
                  {title}
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <ContactButton
                component={Link}
                href="mailto:mezebu07@gmail.com?Subject=Hey Henry!✋"
                target="_blank"
                rel="noopener"
              >
                Resume
              </ContactButton>
              <Tooltip title={`${themeTitle} mode`}>
                <ButtonBase
                  component="div"
                  sx={{ ml: 2, mr: 1 }}
                  onClick={toggleTheme}
                >
                  <ActionIcons>
                    {theme.palette.mode === "dark" ? (
                      <NightsStayRoundedIcon sx={{ fontSize: 20 }} />
                    ) : (
                      <LightModeRoundedIcon sx={{ fontSize: 20 }} />
                    )}
                  </ActionIcons>
                </ButtonBase>
              </Tooltip>
            </Box>
            <Box sx={{ mr: 2, display: { md: "none" } }}>
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </Box>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
      {isOpen && <MobileMenu />}
    </motion.div>
  );
};

export default NavBar;
