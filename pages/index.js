import React from "react";
import Head from "next/head";

import { Hero, About } from "../src/Sections";
import SkillsSection from "../src/Sections/Skills/SkillsSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ezeigwe Henry | Portfolio</title>
      </Head>
      <Hero />
      <About />
      <SkillsSection />
    </>
  );
}
