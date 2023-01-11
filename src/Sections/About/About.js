import { useState } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

import { data } from "./data";
import SideTitleText from "../../components/SideTitleText/SideTitleText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Accordion from "../../components/Accordion/Accordion";

const About = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="about" title=" A LITTLE ABOUT ME" />
      <Grid container>
        <Grid item lg={2} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <SideTitleText title="ABOUT" color="#497174" />
        </Grid>
        <Grid item lg={10} md={10}>
          <Box>
            <Typography variant="body1">
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
              <br />
              <br /> alias eius voluptatibus quia vitae nulla enim possimus
              praesentium veritatis voluptatem error vel, minima ipsum in fuga
              quaerat ab eligendi ea? Ab, ipsam repudiandae? Reprehenderit nihil
              quod laudantium eligendi similique deserunt fuga nostrum maxime
              qui, quibusdam eveniet blanditiis tempora non iusto assumenda
              nesciunt, nobis nam accusamus, est hic illum. Ipsum eveniet
              eligendi corporis! Velit? Dignissimos unde magni reiciendis.
              Deserunt vero facere expedita tempora alias, doloribus error
              quidem, veniam aspernatur impedit placeat itaque repellat porro
              harum sint modi dolorum iusto saepe adipisci, ducimus eius
              laudantium?
            </Typography>

            <Box sx={{ mt: 5 }}>
              {data.map(({ pos, title, content }) => (
                <Accordion
                  key={pos}
                  title={title}
                  content={content}
                  pos={pos}
                  selected={selected === pos}
                  setSelected={setSelected}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
