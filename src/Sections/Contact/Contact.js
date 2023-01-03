import { Grid, Toolbar, Typography } from "@mui/material";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

import {
  StyledAvatar,
  StyledContactSection,
  StyledFooter,
  StyledTab,
} from "./styles";
import { contactData } from "./data";
import Copyright from "../../components/Copyright/Copyright";
import Link from "../../Link";
import { useState } from "react";

const Contact = () => {
  return (
    <>
      <Toolbar />
      <Typography
        sx={{ fontSize: 11, letterSpacing: 3 }}
        color="text.primary"
        variant="button"
      >
        Get in touch
      </Typography>
      <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
        CONTACT
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 700, maxWidth: 250 }}
        >
          {"I'd"} love to collaborate! Let me know what {"you're"} after
        </Typography>
      </Box>

      <Grid container sx={{ my: 5 }}>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          Email
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          Socials
        </Grid>
      </Grid>

      <Toolbar />
    </>
  );
};

export default Contact;

Contact.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
