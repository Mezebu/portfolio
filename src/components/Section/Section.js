import { Box, Container, Toolbar } from "@mui/material";

const Section = ({ children, id, component }) => {
  return (
    <Box component={component} id={id}>
      <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>{children}</Box>
      </Container>
    </Box>
  );
};

export default Section;
