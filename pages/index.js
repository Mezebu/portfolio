import { Fragment } from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import { Hero, About, Projects, Skills } from "../src/Sections";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title> Henry Ezeigwe | Portfolio</title>
      </Head>
      <Box>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Box>
    </Fragment>
  );
};

export default Index;
