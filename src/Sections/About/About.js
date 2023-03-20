import { Fragment, useState } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

import { data } from "./data";
import SideTitleText from "../../components/SideTitleText/SideTitleText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Accordion from "../../components/Accordion/Accordion";
import AboutTab from "./AboutTab";

const About = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Fragment>
      <SectionHeader subTitle="about" title=" A LITTLE ABOUT ME" />
      <Grid container>
        <Grid item lg={2} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <SideTitleText title="ABOUT" color="#497174" />
        </Grid>
        <Grid item lg={10} md={10}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              Hello, my name is Henry and I enjoy building functional and
              visually appealing interactive web apps that provide a positive
              user experience. {"I've"} been interested with technology since I
              was a youngster. I recall thinking it would be a fantastic idea to
              disassemble the family computer. Despite being aware of the
              ramifications, I was curious to see how everything functioned on
              the inside. People would have scoffed if someone stated a few
              years ago that they could fit a computer in their bag. We are now
              at a point where almost everything is feasible, thanks to the
              problem-solving abilities of computer scientists.
              <br />
              <br />
              Hello, my name is Henry and I enjoy building functional and
              visually appealing interactive web apps that provide a positive
              user experience. I am a creative frontend developer at PCCCZ
              Nigerian Company Limited with over 2 years of experience in web
              development. I am a tech-savvy professional who is fascinated by
              emerging digital technologies and strives to integrate usability
              and attractive design.
            </Typography>

            <Box sx={{ mt: 5 /* height: 350 */ }}>
              <Typography
                sx={{ fontSize: 13, letterSpacing: 2, fontWeight: 700, py: 4 }}
              >
                WHERE I HAVE WORKED
              </Typography>
              <AboutTab />
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: 13, letterSpacing: 2, fontWeight: 700, py: 4 }}
            >
              SERVICES
            </Typography>
            {data.map(({ id, pos, title, content }) => (
              <Accordion
                key={id}
                title={title}
                content={content}
                pos={pos}
                selected={selected === pos}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;
