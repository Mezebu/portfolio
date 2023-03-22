import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { v4 as uuidv4 } from "uuid";

import { StyledIcon, StyledLinks } from "./styles";
import { Fragment } from "react";

const data = [
  {
    id: uuidv4(),
    name: "Email",
    link: "mailto:mezebu07@gmail.com?Subject=Hello%20Henry",
    icon: <EmailRoundedIcon />,
  },
  {
    id: uuidv4(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/henry-ezeigwe",
    icon: <LinkedInIcon />,
  },
  {
    id: uuidv4(),
    name: "Github",
    link: "https://github.com/mezebu",
    icon: <GitHubIcon />,
  },
];

const Socials = () => {
  return (
    <Fragment>
      <Box sx={{ mb: 5 }}>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          GOT IDEAS?
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="body1">
          Get in touch, {"I'd"} love to collaborate.
        </Typography>
      </Box>
      <Box>
        {data.map(({ id, name, link, icon }) => (
          <StyledLinks key={id}>
            <StyledIcon>{icon}</StyledIcon>
            <Typography
              component={Link}
              href={link}
              underline="hover"
              color="text.primary"
              sx={{ fontWeight: "500" }}
              target="_blank"
              rel="noopener"
              variant="button"
            >
              {name}
            </Typography>
          </StyledLinks>
        ))}
      </Box>
    </Fragment>
  );
};

export default Socials;
