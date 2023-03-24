import React from "react";
import { motion } from "framer-motion";

const AnimateDivider = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1, originX: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDivider;
