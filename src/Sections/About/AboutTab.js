import React, { useState } from "react";
import { Typography, Link, Tabs, Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { StyledTab } from "../../components/ProjectTab/styels";
import TabPanel from "../../components/ProjectTab/TabPanel";
import TabContent from "./TabContent";
import { fontIT, interswitch, pcccz, shieldTech } from "./data";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AboutTab = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [
    {
      title: "Frontend Developer",
      link: "@ShieldTechub",
      date: "(April 2022 – August 2023)",
      items: shieldTech,
      companyName: "ShieldTechub",
    },
    {
      title: "Software Developer - Junior",
      link: "@ PCCCZ",
      date: "(December 2021 – March 2022)",
      items: pcccz,
      companyName: "PCCCZ",
    },
    {
      title: "IT Customer Support Analyst",
      link: "@ Interswitch",
      date: "(October 2018 – June 2020)",
      items: interswitch,
      companyName: "Interswitch",
    },
    {
      title: "1st/2nd Line Customer Support Analyst",
      link: "@ Font-IT Limited",
      date: "(October 2018 – June 2020)",
      items: fontIT,
      companyName: "Font-IT",
    },
  ];

  return (
    <Box
      sx={{ display: { xs: "block", md: "flex" }, alignItems: "flex-start" }}
    >
      <Tabs
        orientation={matches ? "vertical" : "horizontal"}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: { md: 1 },
          borderBottom: { xs: 1, md: 0 },
          borderColor: "divider",
          overflow: "visible",
          height: { md: "auto" },
        }}
      >
        {tabData.map((tab, index) => (
          <StyledTab
            key={index}
            label={tab.companyName}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {tabData.map((tab, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          sx={{ pt: { xs: 2, md: 0 } }}
        >
          <TabContent
            title={tab.title}
            link={tab.link}
            date={tab.date}
            items={tab.items}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

export default AboutTab;
