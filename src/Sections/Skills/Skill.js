import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { data } from "./data";
import { StyledIcon, StyledImage, StyledSkill, StyledText } from "./styles";

const Skill = () => {
  return (
    <Grid container spacing={1}>
      {data.map(({ id, icon, title }) => (
        <Grid item key={id} lg={4} md={6} sm={6} xs={6}>
          <StyledSkill>
            <StyledIcon>
              <StyledImage>
                <Image src={icon} alt="react-icon" />
              </StyledImage>
            </StyledIcon>
            <StyledText variant="button">{title}</StyledText>
          </StyledSkill>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skill;
