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
            Frontend Developer - Junior{" "}
            <Link underline="hover">@ ShielTechub</Link>
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
              design, and develop the {"company's "} website from its initial
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
              I utilized web development tools and technologies to implement
              responsive and visually appealing designs, ensuring compatibility
              across various browsers and devices.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Worked closely with stakeholders to gather requirements,
              incorporate feedback, and make continuous improvements to the
              {"website's"} functionality and aesthetics.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Maintained and updated the website to ensure it remained current,
              reflecting the {"company's"} latest products, services, and
              branding.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Implemented SEO best practices to enhance the {"website's"}
              visibility and ranking on search engines, driving increased
              organic traffic.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Conducted regular quality assurance testing to identify and
              rectify any bugs or issues, ensuring a seamless user experience.
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
          Frontend Developer - Intern <Link underline="hover">@ PCCCZ</Link>
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
              I tested front-end code in multiple browsers to ensure
              cross-browser compatibility.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Wrote clean, efficient, and maintainable code in various
              programming languages
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>Tested and deployed software applications</Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Troubleshooted and resolved software defects and issues.
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Created technical documentation and user manuals
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Participated in software development lifecycle activities
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Participated in software development lifecycle activities
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
              Answered and directed phone calls and assisted in the preparation
              of meetings and presentations
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Managed calendars and scheduled appointments
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>Organized and maintained files and records</Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>Coordinated meetings and conferences</Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Handled incoming and outgoing correspondence
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>Maintained office supplies and inventory</Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Provided general administrative support to staff
            </Typography>
          </StyledIcon>
          <StyledIcon>
            <ArrowRightRoundedIcon color="primary" />
            <Typography>
              Prepared documents, reports and processed and distributed mails
            </Typography>
          </StyledIcon>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AboutTab;
