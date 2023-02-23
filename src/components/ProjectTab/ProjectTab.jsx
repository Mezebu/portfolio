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

const ProjectTab = ({ heading, image, desc, code, link }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 1 }}>
      <Typography
        sx={{
          fontWeight: 700,
          color: "black",
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
            </Tabs>
          </Box>
          <AnimatePresence mode="popLayout">
            <motion.div key={heading}>
              <TabPanel value={value} index={0}>
                <ProjectCard image={image} />
                <BasicSpeedDial {...{ code, link }} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="subtitle2">
                  {desc}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla perferendis molestias maxime! Rerum esse sed veniam
                  enim. Expedita ipsam similique quo possimus repellat iusto.
                  Odio laborum necessitatibus eos consequatur non.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas fugiat, id doloremque natus commodi mollitia aperiam,
                  praesentium, magni nostrum a amet! Eum deserunt delectus
                  libero vel unde corrupti, quia quos?
                  <br />
                  <br />
                </Typography>
              </TabPanel>
            </motion.div>
          </AnimatePresence>
        </Box>
      </StyledTabContainer>
    </Box>
  );
};

export default ProjectTab;
