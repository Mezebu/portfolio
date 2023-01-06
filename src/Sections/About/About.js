import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import Accordion from "../../components/Accordion/Accordion";
import { data } from "./data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SideTitleText from "../../components/SideTitleText/SideTitleText";

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
              user experience. I am a creative frontend developer at PCCCZ
              Nigerian Company Limited with over 2 years of experience in web
              development. I am a tech-savvy professional who is fascinated by
              emerging digital technologies and strives to integrate usability
              and attractive design.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit nemo quia autem voluptates rem consequuntur iste,
              quasi ex cupiditate eum dolorem ad? Sapiente ad laboriosam, ex qui
              labore tenetur dolor? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates velit eaque repellat tempora quia
              temporibus non ea necessitatibus? Facilis porro obcaecati
              asperiores provident deserunt minima autem velit beatae corrupti
              culpa. Est neque facere, aliquid quos eveniet eius quod tempora
              commodi quae porro! Exercitationem soluta aliquid provident
              numquam eos saepe, corporis quam eaque minima similique iure
              nostrum quasi eius porro nisi? Expedita nesciunt laborum accusamus
              culpa, officiis
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
          <Button
            variant="contained"
            component={Link}
            href="/about"
            disableElevation
          >
            Go to the main page
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
