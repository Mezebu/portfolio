import { Fragment } from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import { Hero, About, Projects } from "../src/Sections";
import SkillsSection from "../src/Sections/Skills/SkillsSection";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Portfolio</title>
      </Head>
      <Box>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
      </Box>
    </Fragment>
  );
};

export default Index;
