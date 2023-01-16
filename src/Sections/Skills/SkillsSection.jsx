import { Box, Grid, Toolbar, Typography } from "@mui/material";

import { data } from "./data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SideTitleText from "../../components/SideTitleText/SideTitleText";
import Skill from "./Skill";
import { Fragment } from "react";

const SkillsSection = () => {
  return (
    <Fragment>
      <SectionHeader subTitle="skills" title="PROGRAMMING LANGUAGES & TOOLS" />

      <Grid container>
        <Grid item lg={10} md={10}>
          <Box sx={{ mb: 7 }}>
            <Typography sx={{ fontWeight: 500 }} variant="subtitle1">
              The nature of my project may influence the web stack I employ in
              development. When developing a web application, I address the
              difficulty of data processing on web pages and how to make it run
              quickly and smoothly. As a result, the web development technology
              stack should be cost-effective.
              <br />
              <br />
              As a developer, I spend the majority of my time in my code editor
              because that is where I write the code for my sites. All editors
              give the plain text format that my code requires in order to be
              understood as a website. My favorite editor, VS Code, simplifies
              my work by allowing me to personalize it with hundreds of add-on
              features, functions, and themes, ensuring that the tool I use the
              most looks and operates precisely the way I want it to.
              <br />
              <br />
              Frontend frameworks range from full-featured, complicated
              frameworks that save me a significant amount of time and effort to
              basic, minimalistic frameworks that I utilize to modify to my
              {"heart's"} content. Material UI and Bootstrap, my personal
              favorites, are the most well-known framework and are ideal for
              responsive websites. {"It's"}
              excellent since I can customize the components to my precise
              specifications.
            </Typography>
          </Box>
          <Skill />
        </Grid>
        <Grid item lg={2} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <SideTitleText title="TOOLS" color="#82C3EC" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SkillsSection;
