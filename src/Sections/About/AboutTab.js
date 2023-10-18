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
        <StyledTab label="Font-IT NG" {...a11yProps(2)} />
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
            2022 - PRESENT
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Collaborated with a cross-functional team to conceptualize,
              design, and develop the {`company's`} website from its initial
              stages.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              I played a key role in the {"website's"} inception, contributing
              to the design and layout, user interface, and overall user
              experience.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Collaborated with a team to design and develop the company website
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Implemented responsive designs and SEO best practices.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Conducted quality assurance testing for a seamless user
              experience.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Conducted regular quality assurance testing to identify and
              rectify any bugs or issues, ensuring a seamless user experience.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Worked closely with stakeholders to gather requirements,
              incorporate feedback, and make continuous improvements to the
              {`website's`} functionality and aesthetics.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Maintained and updated the website to ensure it remained current,
              reflecting the {`company's`} latest products, services, and
              branding.
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
          Frontend Developer - Junior <Link underline="hover">@ PCCCZ</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          2021 - 2022
        </Typography>
        <Box sx={{ mt: 2 }}>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Engaged in various phases of the software development lifecycle,
              contributing to comprehensive project success.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Conducted thorough testing and successfully deployed web
              applications, guaranteeing seamless functionality across various
              web browsers.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Leveraged Git to proficiently manage code while fostering seamless
              collaboration within the team.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Crafted and refined JavaScript code to elevate user interactions
              and enrich the user experience on web pages.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Debugged and resolved coding issues, thereby enhancing website
              functionality and ensuring a seamless user experience.
            </Typography>
          </StyledIcon>
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        sx={{ ".mui-style-19kzrtu": { pt: { xs: 2, md: 0 } } }}
      >
        <Typography variant="body1" fontWeight={600}>
          Administrative Assistant
          <Link underline="hover"> @ Font-IT Limited</Link>
        </Typography>
        <Typography
          sx={{ fontSize: 10, letterSpacing: 2 }}
          color="text.secondary"
          gutterBottom
        >
          2019 - 2021
        </Typography>
        <Box sx={{ mt: 2 }}>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Efficiently oversaw and coordinated office operations,
              encompassing scheduling, supplies, and equipment management for
              optimal workflow.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Offered comprehensive administrative assistance while adeptly
              preparing documents to facilitate efficient office operations.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Efficiently organized and facilitated meetings and conferences to
              ensure productive collaboration and communication.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Proficiently managed both incoming and outgoing correspondence to
              maintain effective communication channels.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Effectively oversaw and organized the calendars of executives and
              teams within the organization to optimize time management and
              productivity.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Accurately input data into databases and meticulously maintained
              both paper and electronic filing systems for streamlined
              information access.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Delivered exemplary front-line customer service and offered
              support to clients, visitors, and employees with a welcoming and
              helpful approach.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Proficiently managed inquiries and efficiently resolved routine
              issues to maintain smooth operations.
            </Typography>
          </StyledIcon>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AboutTab;
