import React, { useState } from "react";
import { Box, Paper, Tabs } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import TabPanel from "./TabPanel";
import { projectsData } from "./data";
import ProjectCard from "./ProjectCard";
import { StyledTab } from "./styels";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectItems = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} sx={{ borderRadius: 2 }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="projects tab"
            sx={{ pt: 0.5, mx: 0.5 }}
          >
            <StyledTab label="Item One" {...a11yProps(0)} />
            <StyledTab label="Item Two" {...a11yProps(1)} />
            <StyledTab label="Item 3" {...a11yProps(2)} />
            <StyledTab label="Item Four" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <AnimatePresence onExitComplete>
          {projectsData.map(({ id, title, index }) => (
            <TabPanel key={id} value={value} index={index}>
              <ProjectCard title={title} />
            </TabPanel>
          ))}
        </AnimatePresence>
      </Box>
    </Paper>
  );
};

export default ProjectItems;
