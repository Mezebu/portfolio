import { Grid, Toolbar, Typography } from "@mui/material";
import { Box, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";

import { contactData } from "./data";
import { StyledPaper } from "./styles";

const Contact = () => {
  return (
    <Box component="section" id="contact">
      <Container maxWidth="lg">
        <Toolbar />
        <Box>
          <Typography align="center" variant="h5">
            Contact me
          </Typography>
          <Box sx={{ mb: 5 }}>
            <Toolbar />
            {contactData.length > 0 && (
              <Grid container spacing={3}>
                {contactData.map(({ id, title, icon, detail }) => (
                  <Grid item key={id} lg={4} md={4} sm={6} xs={12}>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        type: "tween",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <StyledPaper elevation={0}>
                        <Box>{icon}</Box>
                        <Typography>{title}</Typography>
                        <Divider variant="inset" sx={{ my: 2 }} />
                        <Typography>{detail}</Typography>
                      </StyledPaper>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
