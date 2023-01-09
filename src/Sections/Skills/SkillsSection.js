import { Avatar, Box, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/legacy/image";

import { StyledAvatar, StyledIcon, StyledText } from "./styles";
import { FlexCenter, FlexColumn } from "../../../styles/globalStyles";

import { data } from "./data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SideTitleText from "../../components/SideTitleText/SideTitleText";

const SkillsSection = () => {
  return (
    <>
      <Toolbar />
      <SectionHeader subTitle="skills" title="PROGRAMMING LANGUAGES & TOOLS" />

      <Grid container>
        <Grid item lg={10} md={10}>
          <Box sx={{ mb: 7 }}>
            <Typography sx={{ fontWeight: 500 }} variant="subtitle1">
              The nature of my project may influence the web stack I employ in
              development. When developing a web application, I address the
              difficulty of data processing on web pages and how to make it run
              quickly and smoothly. As a result, the web development technology
              stack should be cost-effective.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              tempore excepturi aspernatur libero velit natus. Natus nulla
              laudantium eos vero ipsum esse, illum quia quisquam pariatur quas
              perferendis unde vitae. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Debitis modi quis deleniti itaque, laboriosam
              iusto ducimus asperiores quibusdam blanditiis saepe. Eum optio
              deserunt similique sed modi architecto dolorum minima distinctio?
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              tempore excepturi aspernatur libero velit natus. Natus nulla
              laudantium eos vero ipsum esse, illum quia quisquam pariatur quas
              perferendis unde vitae. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Delectus ea fuga, a quibusdam, animi tempora
              dolor reprehenderit assumenda, amet hic aperiam aut nam. Ea,
              facilis nihil omnis deleniti nostrum earum.
            </Typography>
          </Box>

          <Grid container spacing={1}>
            {data.map(({ id, icon, title }) => (
              <Grid item key={id} lg={4} md={6} sm={6} xs={6}>
                <StyledAvatar>
                  <StyledIcon>
                    <Image src={icon} alt="react-icon" layout="intrinsic" />
                  </StyledIcon>
                  <StyledText variant="button">{title}</StyledText>
                </StyledAvatar>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={2} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <SideTitleText title="TOOLS" color="#497174" />
        </Grid>
      </Grid>
    </>
  );
};

export default SkillsSection;
