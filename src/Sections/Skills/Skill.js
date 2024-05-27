import { Grid, Link } from "@mui/material";
import Image from "next/legacy/image";

import { data } from "./data";
import { StyledIcon, StyledImage, StyledSkill, StyledText } from "./styles";

const Skill = () => {
  return (
    <Grid container spacing={1}>
      {data.map(({ id, icon, title, link }) => (
        <Grid item key={id} lg={4} md={6} sm={6} xs={6}>
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            variant="inherit"
            underline="none"
            color="inherit"
          >
            <StyledSkill>
              <StyledIcon>
                <StyledImage>
                  <Image src={icon} alt="react-icon" />
                </StyledImage>
              </StyledIcon>
              <StyledText variant="button">{title}</StyledText>
            </StyledSkill>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skill;
