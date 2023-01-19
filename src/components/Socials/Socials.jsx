import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/legacy/image";

import { FlexJustifyCenter } from "../../../styles/globalStyles";
import { StyledLinks } from "./styles";
import { data } from "./data";

const Socials = () => {
  return (
    <Box>
      <FlexJustifyCenter>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, maxWidth: 300, mb: 2 }}
        >
          You could also connect with me through other social networking sites.
        </Typography>
      </FlexJustifyCenter>
      <Grid container sx={{ px: { sm: 7 }, mt: 0.7 }}>
        {data.map(({ id, title, link, icon }) => (
          <Grid item key={id} lg={4} md={4} sm={4} xs={6}>
            <Link href={link} target="_blank" rel="noopener" underline="none">
              <StyledLinks variant="outlined" elevation={0}>
                <Image src={icon} alt={`${title}-icon`} />
                <Typography variant="caption">{title}</Typography>
              </StyledLinks>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Socials;
