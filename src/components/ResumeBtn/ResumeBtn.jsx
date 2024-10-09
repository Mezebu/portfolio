import React from "react";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import { FlexCenter } from "../../../styles/globalStyles";

const ResumeBtn = () => {
  const buttonSx = {
    variant: "contained",
    size: "large",
    disableElevation: true,
    sx: {
      bgcolor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.common.black
          : theme.palette.secondary.light,
      color: (theme) => theme.palette.common.white,
    },
    href: "https://drive.google.com/file/d/1j-4Ba07QaN2NC3-3rd4HyguNhmclEXM_/view?usp=drive_link",
    target: "_blank",
  };

  const motionProps = {
    component: motion.div,
    animate: { y: 0 },
    initial: { y: "100%" },
    transition: { duration: 1, delay: 1 },
  };

  return (
    <FlexCenter sx={{ my: 3, overflow: "hidden" }}>
      <Box {...motionProps}>
        <Button {...buttonSx}>Resume</Button>
      </Box>
    </FlexCenter>
  );
};

export default ResumeBtn;
