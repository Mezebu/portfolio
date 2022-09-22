import { Fragment } from "react";
import Head from "next/head";

import { Hero, About } from "../src/Sections";
import SkillsSection from "../src/Sections/Skills/SkillsSection";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Portfolio</title>
      </Head>
      <Hero />
      <About />
      <SkillsSection />
    </Fragment>
  );
};

export default Index;
