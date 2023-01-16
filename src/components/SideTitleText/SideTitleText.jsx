import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SideTitleText = ({ title, color }) => {
  return (
    <Box
      component={motion.div}
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      viewport={{ once: "true" }}
      transition={{ duration: 1.5, type: "tween" }}
      sx={{
        position: { md: "sticky", top: 80 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: color,
          fontSize: { xs: "2rem", md: "7vw" },
          textAlign: "right",
          fontFamily: "Montserrat",
          writingMode: { md: "vertical-rl" },
          textOrientation: { md: "upright" },
          opacity: 0.3,
          transition: "all 0.5s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SideTitleText;

SideTitleText.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
