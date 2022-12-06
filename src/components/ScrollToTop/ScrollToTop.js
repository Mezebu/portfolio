import { Box, Fade, useScrollTrigger, Tooltip } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = ({ children, window }) => {
  const handleClick = () => {
    scroll.scrollToTop({ duration: 1800 });
  };

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Tooltip title="Scroll to top">
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    </Tooltip>
  );
};

export default ScrollToTop;
