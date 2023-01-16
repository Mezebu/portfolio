import { Box, Grid, Toolbar } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { data } from "./data";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/legacy/image";
import SideTitleText from "../../components/SideTitleText/SideTitleText";

const Works = () => {
  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="my work" title="RECENT WORKS" />

      <Grid container>
        <Grid item lg={2} md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <SideTitleText title="PROJECTS" color="#439A97" />
        </Grid>
        <Grid item lg={10} md={10}>
          {data.map(
            ({ id, image, altName, avi, title, web, code, desc, stack }) => (
              <Box key={id} sx={{ mt: { md: 4 } }}>
                <Card variant="outlined" sx={{ maxWidth: 550 }}>
                  <Image
                    src={image}
                    alt={altName}
                    layout="responsive"
                    loading="lazy"
                  />
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    left: { lg: 420, md: 300, sm: 120 },
                    bottom: 50,
                    maxWidth: 550,
                  }}
                >
                  <CardHeader
                    avatar={<Avatar aria-label={altName}>{avi}</Avatar>}
                    title={<Typography variant="button">{title}</Typography>}
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="body2">{desc}</Typography>
                    <Typography
                      sx={{ mt: 2, fontweight: 800, fontSize: "small" }}
                    >
                      {stack}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton
                      aria-label="add to favorites"
                      href={web}
                      target="_blank"
                      rel="noopener"
                    >
                      <PublicIcon />
                    </IconButton>
                    <IconButton
                      aria-label="github"
                      href={code}
                      target="_blank"
                      rel="noopener"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            )
          )}
        </Grid>
      </Grid>

      <Toolbar />
    </Box>
  );
};

export default Works;
