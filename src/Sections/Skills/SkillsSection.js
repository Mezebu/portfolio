import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";

import { SkillsWrapper, StyledAvatar, StyledText } from "./styles";
import { FlexColumn } from "../../../styles/globalStyles";

import Image from "next/image";
import { data } from "./data";
import Section from "../../components/Section/Section";

const SkillsSection = () => {
  return (
    <Section component="section" id="skills">
      <Typography
        sx={{ fontSize: 11, letterSpacing: 3 }}
        color="text.primary"
        variant="button"
      >
        SKILLS
      </Typography>
      <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
        PROGRAMMING LANGUAGES & TOOLS
      </Typography>
      <Toolbar />

      <Box sx={{ mb: 7 }}>
        <Typography>
          The nature of my project may influence the web stack I employ in
          development. When developing a web application, I address the
          difficulty of data processing on web pages and how to make it run
          quickly and smoothly. As a result, the web development technology
          stack should be cost-effective.
        </Typography>
      </Box>

      <Grid container spacing={1}>
        {data.map(({ id, icon, title }) => (
          <Grid item key={id} lg={2} md={4} sm={4} xs={6}>
            <FlexColumn>
              <StyledAvatar>
                <Image src={icon} alt="react-icon" height="50%" width="50%" />
              </StyledAvatar>
              <StyledText variant="button">{title}</StyledText>
            </FlexColumn>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default SkillsSection;
