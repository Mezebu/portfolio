import React from "react";
import { Box, MenuItem, Paper } from "@mui/material";
import { motion } from "framer-motion";

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
      <Box
        component={Paper}
        elevation={0}
        sx={{
          width: { xs: "70%", sm: "50%" },
          zIndex: 1200,
          position: "fixed",
          right: 60,
          top: 75,
          display: { xs: "block", md: "none" },
          bgcolor: "background.paper",
          mt: 2,
        }}
      >
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
      </Box>
    </motion.div>
  );
};

export default MobileMenu;
