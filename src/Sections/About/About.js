import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import PageNumber from "../../components/PageNumber/PageNumber";
import Accordion from "../../components/Accordion/Accordion";
import Link from "../../Link";
import { accordionData } from "./data";

const About = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Box>
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
Praesent commodo cursus magna, vel scelerisque nisl consecteur et.`
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
      <Button variant="contained" component={Link} noLinkStyle href="/about">
        Go to the main page
      </Button>
    </Box>
  );
};

export default About;
