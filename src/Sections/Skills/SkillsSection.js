import { Container, Grid, Toolbar, Typography } from "@mui/material";

import { SkillsWrapper, StyledAvatar, StyledText } from "./styles";
import { FlexColumn } from "../../../styles/globalStyles";

import Image from "next/image";
import { data } from "./data";

const SkillsSection = () => {
  return (
    <SkillsWrapper component="section" id="skills">
      <Container maxWidth="lg">
        <Toolbar />
        <Typography sx={{ mb: 5 }} variant="h6" align="center">
          Things i have worked with
        </Typography>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item lg={6} md={6}>
            <Typography>
              The nature of my project may influence the web stack I employ in
              development. When developing a web application, I address the
              difficulty of data processing on web pages and how to make it run
              quickly and smoothly. As a result, the web development technology
              stack should be cost-effective.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6}>
            <Grid container>
              {data.map(({ id, icon, title }) => (
                <Grid item key={id} lg={4} xs={6} sm={4} md={4}>
                  <FlexColumn>
                    <StyledAvatar>
                      <Image
                        src={icon}
                        alt="react-icon"
                        height="50%"
                        width="50%"
                      />
                    </StyledAvatar>
                    <StyledText variant="button">{title}</StyledText>
                  </FlexColumn>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Toolbar />
      </Container>
    </SkillsWrapper>
  );
};

export default SkillsSection;
