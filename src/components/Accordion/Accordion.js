import React, { useState } from "react";
import { Box, Collapse, Container, Typography } from "@mui/material";
import { Divide as Hamburger } from "hamburger-react";

import { StyledAccordion } from "./styles";
import { FlexAlignCenter, FlexSpaceBtween } from "../../../styles/globalStyles";

const Accordion = ({ pos, title, content }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected((prev) => !prev);
  };
  return (
    <StyledAccordion sx={{ py: { xs: 2, md: 5 } }} onClick={handleSelect}>
      <FlexSpaceBtween>
        <FlexAlignCenter>
          <Box sx={{ mr: 4 }}>
            <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
              {pos}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: 600, letterSpacing: 3 }}
              variant="subtitle1"
            >
              {title}
            </Typography>
          </Box>
        </FlexAlignCenter>
        <Box onClick={handleSelect}>
          <Hamburger toggled={selected} toggle={setSelected} size={20} />
        </Box>
      </FlexSpaceBtween>

      <Collapse in={selected} timeout={500} unmountOnExit>
        <Box sx={{ p: 2 }}>
          <Container>
            <Typography sx={{ fontWeight: 500 }} variant="subtitle1">
              {content}
            </Typography>
          </Container>
        </Box>
      </Collapse>
    </StyledAccordion>
  );
};

export default Accordion;
