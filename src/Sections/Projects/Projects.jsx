import { useState } from "react";
import { Box, Tabs, Toolbar } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/legacy/image";
import SideTitleText from "../../components/SideTitleText/SideTitleText";
import { StyledTab, StyledTabContainer } from "./styles";

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

const Works = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="my work" title="RECENT WORKS" />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledTabContainer
          elevation={0}
          variant="outlined"
          sx={{ width: { xs: "100%", md: "80%" } }}
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
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </StyledTabContainer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Works;
