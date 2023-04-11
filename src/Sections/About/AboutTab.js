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
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Box>
          <Typography variant="body1" fontWeight={600}>
            Frontend Developer <Link underline="hover">@ ShielTechub</Link>
          </Typography>
          <Typography
            sx={{ fontSize: 10, letterSpacing: 2 }}
            color="text.secondary"
            gutterBottom
          >
            NOVEMBER 2022 - PRESENT
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Collaborated with the UX/UI design teams to enhance the website
              and applications, resulting in a 30% increase in conversion rates.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Performed regular site maintenance and optimization of web pages
              for maximum speed, scalability, and the best user experience
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Worked with a team of Web Designers, Back-end Designers, Project
              Managers, and System Analysts to complete projects
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Got feedback from, and built solutions for, users and customers.
            </Typography>
          </StyledIcon>
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Typography variant="body1" fontWeight={600}>
          Frontend Developer <Link underline="hover">@ PCCCZ</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          MARCH 2020 - 2022
        </Typography>
        <Box sx={{ mt: 2 }}>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Developed new ideas with the team and contributed to creating the
              {` company's`} website framework using SCSS(SASS).
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Tested front-end code in multiple browsers to ensure cross-browser
              compatibility.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Worked with back-end engineers to make the {`company's`} website
              more user-friendly.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Daily maintenance of code, debugging issues and solving clients’
              problems.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Testing website applications to ensure it works as expected and
              also responsible for fixing bugs and implementing new features as
              needed
            </Typography>
          </StyledIcon>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AboutTab;
