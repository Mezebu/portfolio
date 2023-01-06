import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/legacy/image";

import { StyledAvatar, StyledText } from "./styles";
import { FlexColumn } from "../../../styles/globalStyles";

import { data } from "./data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const SkillsSection = () => {
  return (
    <>
      <Toolbar />
      <SectionHeader subTitle="skills" title="PROGRAMMING LANGUAGES & TOOLS" />

      <Box sx={{ mb: 7 }}>
        <Typography sx={{ fontWeight: 500 }} variant="subtitle1">
          The nature of my project may influence the web stack I employ in
          development. When developing a web application, I address the
          difficulty of data processing on web pages and how to make it run
          quickly and smoothly. As a result, the web development technology
          stack should be cost-effective.
        </Typography>
      </Box>

      <Grid container spacing={1}>
        {data.map(({ id, icon, title }) => (
          <Grid item key={id} lg={2} md={4} sm={4} xs={6}>
            <FlexColumn>
              <StyledAvatar>
                <Image src={icon} alt="react-icon" height={50} width={50} />
              </StyledAvatar>
              <StyledText variant="button">{title}</StyledText>
            </FlexColumn>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillsSection;
