import React from "react";
import { Box, MenuItem, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { StyledPaper } from "./styles";

const MobileMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.1,
      }}
    >
      <StyledPaper>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
      </StyledPaper>
    </motion.div>
  );
};

export default MobileMenu;
