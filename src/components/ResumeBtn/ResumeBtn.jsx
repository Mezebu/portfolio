import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { FlexCenter } from "../../../styles/globalStyles";

const ResumeBtn = () => {
  return (
    <FlexCenter sx={{ my: 3, overflow: "hidden" }}>
      <Button
        variant="contained"
        size="large"
        disableElevation
        component={motion.button}
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ duration: 1, delay: 1 }}
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.common.black
              : theme.palette.secondary.light,
        }}
      >
        Download Resume
      </Button>
    </FlexCenter>
  );
};

export default ResumeBtn;
