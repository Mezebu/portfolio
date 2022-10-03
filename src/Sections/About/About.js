import { useState } from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import Accordion from "../../components/Accordion/Accordion";
import Section from "../../components/Section/Section";
import { accordionData } from "./data";

const About = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Section component="section" id="about">
      <Typography
        sx={{ fontSize: 11, letterSpacing: 3 }}
        color="text.secondary"
        variant="button"
      >
        About
      </Typography>
      <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
        A LITTLE ABOUT ME
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
    </Section>
  );
};

export default About;
