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
              {`Hi there! I'm Henry, a passionate Frontend Developer with over three years of experience in creating websites and web applications. I have a master's degree in computing from South East Technological
               University, and I love bringing creativity and technical skills to exciting projects.`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`
              In my recent job at Shield Tech Hub, I worked with a fantastic team to build custom 
              eCommerce websites. I used tools like Commerce.js to make online shopping easier and more 
              enjoyable for users. Before that, at PCCCZ Nigeria Company LTD, I helped improve web pages 
              using JavaScript and frameworks like Bootstrap and MUI, making them more interactive and user-friendly.
             `}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`
              My journey in tech started at Font-IT Limited, where I managed office 
              tasks and provided administrative support, which helped me develop strong organizational 
              skills. Over the years, I’ve become skilled in HTML, CSS, JavaScript, React.js, Next.js, and many other technologies. I also know how to 
              use Git for version control, AWS for cloud services, and MongoDB for databases.
              `}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`
            During my master's program, I worked on projects like a Movie Web App and a Serverless Web API. 
            These projects helped me put my skills to the test and learn more about using ReactJS and AWS services to create efficient and scalable solutions.
            `}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`
              Additionally, I have held roles as an IT Customer Support Analyst at Interswitch and a 1st/2nd 
              Line Customer Support Analyst at Font-IT Limited. These positions honed my skills in technical support, 
              system troubleshooting, and user interaction, which have been invaluable in my development career.
              `}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`
              When I'm not coding, I volunteer with The Brothers of Charity Services South East, where I 
              provide care and support to individuals with intellectual disabilities. This experience has 
              taught me the value of patience, empathy, and detailed documentation. I love working in team environments where I can contribute and grow professionally.
              I’m excited to bring my skills and passion to new challenges and opportunities.
               `}
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
