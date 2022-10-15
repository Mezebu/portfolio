import Head from "next/head";
import { Fragment, useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Box, Toolbar, Container } from "@mui/material";
import { motion } from "framer-motion";

import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Accordion from "../src/components/Accordion/Accordion";
import PageNumber from "../src/components/PageNumber/PageNumber";
import { accordionData } from "../src/Sections/About/data";

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
        <title>Ezeigwe Henry | About</title>
      </Head>
      <Container maxWidth="lg">
        <Toolbar />
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
                <Box
                  component={motion.div}
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  sx={{
                    position: { md: "sticky", top: 80 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#B68973",
                      fontSize: { xs: "4rem", md: "7vw" },
                      textAlign: "center",
                      fontFamily: "Montserrat",
                      writingMode: { md: "vertical-rl" },
                      textOrientation: { md: "upright" },
                      opacity: 0.3,
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    ABOUT
                  </Typography>
                </Box>
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

                  <Button
                    variant="contained"
                    component={Link}
                    noLinkStyle
                    href="/"
                  >
                    Go to the main page
                  </Button>
                  <ProTip />
                </Box>
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container>
              <Grid item lg={11} md={10}>
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

                  <Button
                    variant="contained"
                    component={Link}
                    noLinkStyle
                    href="/"
                  >
                    Go to the main page
                  </Button>
                  <ProTip />
                </Box>
              </Grid>
              <Grid item lg={1} md={2}>
                <Box
                  component={motion.div}
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  sx={{ position: { md: "sticky", top: 80 } }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "4rem", md: "7vw" },
                      textAlign: "right",
                      fontFamily: "Montserrat",
                      writingMode: { md: "vertical-rl" },
                      textOrientation: { md: "upright" },
                      opacity: 0.3,
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    SKILLS
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}
