import { Avatar, Grid, Toolbar, Typography } from "@mui/material";
import { Box, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Link from "../../Link";

import { contactData } from "./data";
import { StyledAvatar, StyledFooter, StyledPaper } from "./styles";

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
                {contactData.map(({ id, title, icon, detail, link }) => (
                  <Grid item key={id} lg={4} md={4} sm={6} xs={12}>
                    <StyledFooter
                      elevation={0}
                      component={motion.div}
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        type: "tween",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <StyledAvatar variant="rounded">
                        <Box>{icon}</Box>
                      </StyledAvatar>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {title}
                        </Typography>
                        <Divider sx={{ my: 0.5 }} />
                        <Typography
                          component={Link}
                          href={link}
                          variant="subtitle2"
                          fontWeight={600}
                        >
                          {detail}
                        </Typography>
                      </Box>
                    </StyledFooter>
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
