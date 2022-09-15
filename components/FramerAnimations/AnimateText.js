import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimateText = ({ text, variant, fontWeight, fontFamily }) => {
  const header = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.08,
        duration: 5,
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
          variant={variant}
          fontWeight={fontWeight}
          component={motion.span}
          key={char + "_" + index}
          variants={letter}
          sx={{ fontFamily: fontFamily }}
        >
          {char}
        </Typography>
      ))}
    </Box>
  );
};

export default AnimateText;

AnimateText.propTypes = {
  fontWeight: PropTypes.number,
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
};
