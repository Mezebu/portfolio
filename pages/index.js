import * as React from "react";
import Head from "next/head";

import HomeHero from "../src/Sections/HeroSection/HomeHero";
import About from "../src/Sections/About/About";
import SkillsSection from "../src/Sections/Skills/SkillsSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ezeigwe Henry</title>
      </Head>
      <HomeHero />
      <About />
      <SkillsSection />
    </>
  );
}
