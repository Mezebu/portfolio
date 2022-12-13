import { Box, Card, CardMedia, Grid } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

import { useTheme } from "@mui/material/styles";

import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import { project } from "../../assets/index";

const CardProject = () => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{
        background: "rgba( 234, 234, 234, 0.15 )",
        backdropFilter: "blur( 3.5px )",
        WebkitBackdropFilter: "blur( 3.5px )",
      }}
    >
      <Grid container>
        <Grid item lg={6} md={6}>
          <CardMedia>
            <Image
              loading="lazy"
              src={project}
              alt="Live from space album cover"
              layout="responsive"
            />
          </CardMedia>
        </Grid>

        <Grid item lg={6} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardProject;
