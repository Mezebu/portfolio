import { useState } from "react";
import { IconButton, Toolbar, Tooltip, CssBaseline, Box } from "@mui/material";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

import { StyledAppBar, StyledNavLogo } from "./styles";
import { NavLink, StyledToolbar } from "./styles";
import { FlexAlignCenter } from "../../../styles/globalStyles";
import { navLinks } from "./NavData";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import ProgressBar from "../FramerAnimations/ProgressBar";
import MobileMenu from "../MobileMenu/MobileMenu";
import ElevationScroll from "./ElevationScroll";
import Link from "../../Link";

const NavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

            <ThemeSwitcher {...{ open, handleClose, anchorEl }} />

            <FlexAlignCenter sx={{ mr: 2 }}>
              <Box>
                <Tooltip title="Theme">
                  <IconButton
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    onClick={handleClick}
                  >
                    <NightsStayRoundedIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ display: { md: "none" } }}>
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
              </Box>
            </FlexAlignCenter>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
      {isOpen && (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileMenu />
        </Box>
      )}
    </motion.div>
  );
};

export default NavBar;
