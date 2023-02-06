import React, { useState } from "react";
import { Box, Tabs, Typography } from "@mui/material";

import { StyledTab, StyledTabContainer } from "../../Sections/Projects/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HeroProjectTwo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <StyledTabContainer
        elevation={0}
        variant="outlined"
        sx={{ width: { xs: "100%", md: "60%" } }}
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
              <StyledTab label="Item One" {...a11yProps(0)} />
              <StyledTab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Hero Item Two
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </StyledTabContainer>
    </Box>
  );
};

export default HeroProjectTwo;
