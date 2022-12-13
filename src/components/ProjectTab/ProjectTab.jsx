import React, { useState } from "react";
import { Box, Tabs, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import TabPanel from "./TabPanel";
import ProjectCard from "./ProjectCard";
import { StyledTab, StyledTabContainer } from "./styels";
import { FlexAlignCenter } from "../../../styles/globalStyles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectTab = ({ heading, image, desc }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          color: "black",
          fontFamily: "Montserrat",
          opacity: 0.3,
          transition: "all 0.5s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
        align="center"
      >
        {heading}
      </Typography>
      <StyledTabContainer elevation={0} variant="outlined">
        <Box sx={{ width: "100%", margin: "auto" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="projects tab"
              sx={{ pt: 0.5, mx: 0.5 }}
            >
              <StyledTab label="Image" {...a11yProps(0)} />
              <StyledTab label="Desc" {...a11yProps(1)} />
              <StyledTab label="lang" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <AnimatePresence mode="popLayout">
            <motion.div key={heading}>
              <TabPanel value={value} index={0}>
                <ProjectCard image={image} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                {desc}
              </TabPanel>
            </motion.div>
          </AnimatePresence>
        </Box>
      </StyledTabContainer>
    </>
  );
};

export default ProjectTab;
