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
              user experience. As a frontend developer, my mission is to create
              intuitive and engaging user experiences through the use of clean
              and efficient code. I believe that a website should not only look
              great, but should also be easy to navigate and use.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I approach each project with a user-first mentality, taking the
              time to understand the target audience and their needs in order to
              create a website that meets those needs. I am skilled in creating
              responsive designs that work across all devices and screen sizes,
              and I am constantly staying up-to-date with the latest frontend
              technologies and trends.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am passionate about creating websites that not only function
              flawlessly, but also look great and showcase the brand or product
              in the best possible light. I am committed to delivering
              high-quality work and exceeding client expectations.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Whether {`it's`} developing a new website from scratch or
              improving an existing one, I am dedicated to providing the best
              possible user experience and helping businesses achieve their
              goals through effective frontend development.
            </Typography>

            <Box sx={{ mt: 5 /* height: 350 */ }}>
              <Typography
                sx={{ fontSize: 14, letterSpacing: 2, fontWeight: 700, py: 4 }}
              >
                WHERE I HAVE WORKED
              </Typography>
              <AboutTab />
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: 14, letterSpacing: 2, fontWeight: 700, py: 4 }}
            >
              SERVICES I PROVIDE
            </Typography>
            <Typography variant="body1" sx={{ mb: 5 }}>
              I offer a variety of services as a frontend developer to assist
              companies and individuals in developing interesting and
              user-friendly websites. Among my main services are the following:
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
