import { Fragment } from "react";
import Head from "next/head";

import { Hero, About, Works, Contact } from "../src/Sections";
import SkillsSection from "../src/Sections/Skills/SkillsSection";
import { Box, Fab } from "@mui/material";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Portfolio</title>
      </Head>
      <Box>
        <Hero />
        <About />
        <SkillsSection />
        <Works />
        <Contact />
        <ScrollToTop {...children}>
          <Fab size="small" color="warning" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>
      </Box>
    </Fragment>
  );
};

export default Index;
