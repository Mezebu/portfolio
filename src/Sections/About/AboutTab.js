import React, { useState } from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import Typography from "@mui/material/Typography";
import TabPanel from "../../components/ProjectTab/TabPanel";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import { StyledIcon } from "./styles";
import { StyledTab } from "../../components/ProjectTab/styels";
import { useMediaQuery, useTheme } from "@mui/material";
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

  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      <Tabs
        orientation={matches ? "vertical" : "horizontal"}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          overflow: "visible",
          height: { md: 200 },
        }}
      >
        <StyledTab label="Shieldtechub" {...a11yProps(0)} />
        <StyledTab label="PCCCZ" {...a11yProps(1)} />
        <StyledTab label="Interswitch" {...a11yProps(2)} />
        <StyledTab label="Font-IT NG" {...a11yProps(3)} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Box>
          <Typography variant="body1" fontWeight={600}>
            Frontend Developer <Link underline="hover">@ShielTechub</Link>
          </Typography>
          <Typography
            sx={{ fontSize: 10, letterSpacing: 2 }}
            color="text.secondary"
            gutterBottom
          >
            (April 2022 – August 2023)
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          {shieldTech.map(({ id, content }) => (
            <StyledIcon key={id}>
              <ArrowRightRoundedIcon color="primary" />
              <Typography>{content}</Typography>
            </StyledIcon>
          ))}
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Typography variant="body1" fontWeight={600}>
          Software Developer - Junior <Link underline="hover">@ PCCCZ</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          (December 2021 – March 2022)
        </Typography>
        <Box sx={{ mt: 2 }}>
          {pcccz.map(({ id, content }) => (
            <StyledIcon key={id}>
              <ArrowRightRoundedIcon color="primary" />
              <Typography>{content}</Typography>
            </StyledIcon>
          ))}
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Typography variant="body1" fontWeight={600}>
          IT Customer Support Analyst
          <Link underline="hover"> @ Interswitch</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          (October 2018 – June 2020)
        </Typography>
        <Box sx={{ mt: 2 }}>
          {interswitch.map(({ id, content }) => (
            <StyledIcon key={id}>
              <ArrowRightRoundedIcon color="primary" />
              <Typography>{content}</Typography>
            </StyledIcon>
          ))}
        </Box>
      </TabPanel>

      <TabPanel
        value={value}
        index={3}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Typography variant="body1" fontWeight={600}>
          1st/2nd Line Customer Support Analyst
          <Link underline="hover"> @ Font-IT Limited</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          (October 2018 – June 2020)
        </Typography>
        <Box sx={{ mt: 2 }}>
          {fontIT.map(({ id, content }) => (
            <StyledIcon key={id}>
              <ArrowRightRoundedIcon color="primary" />
              <Typography>{content}</Typography>
            </StyledIcon>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AboutTab;
