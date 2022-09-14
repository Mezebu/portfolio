import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const AnimateText = ({ text }) => {
  const header = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Box
      component={motion.div}
      variants={header}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <Typography
          variant="h4"
          component={motion.span}
          key={char + "_" + index}
          variants={letter}
        >
          {char}
        </Typography>
      ))}
    </Box>
  );
};

export default AnimateText;
