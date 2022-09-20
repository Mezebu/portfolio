import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { StyledProgressBar } from "./styles";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <StyledProgressBar component={motion.div} style={{ scaleX }} />;
};

export default ProgressBar;
