import { Box, Collapse, Container, Typography } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { StyledAccordion } from "./styles";
import { FlexAlignCenter, FlexSpaceBtween } from "../../../styles/globalStyles";

const Accordion = ({ pos, title, content, selected, setSelected }) => {
  const handleSelect = () => {
    setSelected(selected ? null : pos);
  };

  return (
    <StyledAccordion
      sx={{ py: { xs: 4, md: 5 }, ml: { xs: 0, md: 17 } }}
      onClick={handleSelect}
    >
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
              variant="button"
            >
              {title}
            </Typography>
          </Box>
        </FlexAlignCenter>
        <Box onClick={handleSelect}>
          {selected ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
        </Box>
      </FlexSpaceBtween>

      <Collapse in={selected} timeout={500} unmountOnExit>
        <Box sx={{ py: 2, pl: { xs: 3, sm: 2.5 } }}>
          <Container maxWidth="lg">
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
