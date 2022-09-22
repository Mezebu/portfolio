import Head from "next/head";
import { Fragment } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

import ProTip from "../src/ProTip";
import Link from "../src/Link";
import AnimateInview from "../src/components/FramerAnimations/AnimateInview";

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
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | About</title>
      </Head>
      <Box
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Next.js example
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Grid container>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <AnimateInview transform="translateX(-100px)">
                <Box component={motion.p} variants={item}>
                  {[...new Array(4)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    )
                    .join("\n")}
                </Box>
              </AnimateInview>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={4} md={2} sm={12} xs={12} />
            <Grid item lg={8} md={10} sm={12} xs={12}>
              <AnimateInview transform="translateX(80px)">
                <Box component={motion.p} variants={item}>
                  {[...new Array(4)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    )
                    .join("\n")}
                </Box>
              </AnimateInview>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
      </Box>
    </Fragment>
  );
}
