import { Box, Container, Toolbar } from "@mui/material";

const Section = ({ children, id, component }) => {
  return (
    <Box component={component} id={id}>
      <Toolbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Section;
