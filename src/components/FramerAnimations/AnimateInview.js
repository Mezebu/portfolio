import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Box } from "@mui/material";

const AnimateInview = ({ children, transform }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref}>
      <Box
        sx={{
          transform: isInView ? "none" : transform,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AnimateInview;
