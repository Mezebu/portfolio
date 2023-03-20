import React, { useState } from "react";
import { Box, Tabs, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import TabPanel from "./TabPanel";
import ProjectCard from "./ProjectCard";
import { StyledTab, StyledTabContainer } from "./styels";
import BasicSpeedDial from "../SpeedDial/SpeedDial";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectTab = ({ heading, image, desc, desc2, code, link, stack }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 1 }}>
      <Typography
        gutterBottom
        variant="subtitle2"
        fontWeight={600}
        align="center"
        sx={{
          opacity: 0.7,
          transition: "all 0.5s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        {heading}
      </Typography>
      <StyledTabContainer
        elevation={0}
        variant="outlined"
        sx={{ height: { xs: 390, md: 440 }, overflow: "auto" }}
      >
        <Box sx={{ width: "100%", margin: "auto" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="projects tab"
              sx={{ pt: 0.5, mx: 0.5 }}
            >
              <StyledTab label="Preview" {...a11yProps(0)} />
              <StyledTab label="Description" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <AnimatePresence mode="popLayout">
            <Box component={motion.div} key={heading}>
              <TabPanel value={value} index={0}>
                <ProjectCard image={image} />
                <BasicSpeedDial {...{ code, link }} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    {desc}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {desc2}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 2,
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.primary.dark
                          : theme.palette.primary.dark,
                    }}
                    variant="button"
                  >
                    {stack}
                  </Typography>
                </Box>
              </TabPanel>
            </Box>
          </AnimatePresence>
        </Box>
      </StyledTabContainer>
    </Box>
  );
};

export default ProjectTab;
