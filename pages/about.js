import Head from "next/head";
import { Typography, Button, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

import ProTip from "../src/ProTip";
import Link from "next/link";
import Accordion from "../src/components/Accordion/Accordion";
import PageNumber from "../src/components/PageNumber/PageNumber";
import { accordionData } from "../src/Sections/About/data";
import SideText from "../src/components/SideTitleText/SideTitleText";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function About() {
  const [selected, setSelected] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | About Me</title>
      </Head>

      <Box>
        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          sx={{ px: { xs: 3, md: 0 } }}
        >
          <Grid container>
            <Grid item lg={2} md={2}>
              <SideText title="ABOUT" color="#B68973" />
            </Grid>
            <Grid item lg={10} md={10}>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 3,
                    fontWeight: 600,
                  }}
                  color="text.secondary"
                  variant="button"
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 3,
                  }}
                  variant="h6"
                >
                  More About Me
                </Typography>
                <Box sx={{ my: 4 }}>
                  {[...new Array(4)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    )
                    .join("\n")}

                  <Box sx={{ mt: 5 }}>
                    {accordionData.map(({ pos, title, content }) => (
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
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <PageNumber page="02" />
                </Box>

                <Button variant="contained" component={Link} href="/">
                  Go to the main page
                </Button>
                <ProTip />
              </Box>
            </Grid>
          </Grid>
          <Toolbar />
          <Grid container>
            <Grid item lg={11} md={10}>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    justifyContent: "flex-start",
                    md: "none",
                  },
                }}
              >
                <SideText title="SKILLS" color="#815B5B" />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 3,
                    fontWeight: 600,
                  }}
                  color="text.secondary"
                  variant="button"
                >
                  Skills
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 3,
                  }}
                  variant="h6"
                >
                  Skills
                </Typography>
                <Box sx={{ my: 4 }}>
                  {[...new Array(4)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    )
                    .join("\n")}

                  <Box sx={{ mt: 5 }}>
                    {accordionData.map(({ pos, title, content }) => (
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
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <PageNumber page="02" />
                </Box>

                <Button variant="contained" component={Link} href="/">
                  Go to the main page
                </Button>
                <ProTip />
              </Box>
            </Grid>
            <Grid
              item
              lg={1}
              md={2}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <SideText title="SKILLS" color="#815B5B" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}
