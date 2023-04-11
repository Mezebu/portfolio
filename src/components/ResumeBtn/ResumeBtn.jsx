import React from "react";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import { FlexCenter } from "../../../styles/globalStyles";

const ResumeBtn = () => {
  return (
    <FlexCenter sx={{ my: 3, overflow: "hidden" }}>
      <Box
        component={motion.div}
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.black
                : theme.palette.secondary.light,
          }}
          href="https://drive.google.com/file/d/1aj5gVtzLawut7ZlgS8DF2lpByQxhG1wM/view?usp=share_link"
          target="_blank"
        >
          Resume
        </Button>
      </Box>
    </FlexCenter>
  );
};

export default ResumeBtn;
