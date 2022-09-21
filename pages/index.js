import { Fragment } from "react";
import Head from "next/head";

import { Hero, About } from "../src/Sections";
import SkillsSection from "../src/Sections/Skills/SkillsSection";
import NavBar from "../src/components/Navbar";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Portfolio</title>
      </Head>
      <NavBar />
      <Hero />
      <About />
      <SkillsSection />
    </Fragment>
  );
};

export default Index;
