import { Avatar, Box, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { project } from "../../assets/index";
import { data } from "./data";
import BasicSpeedDial from "./data";
import ProjectSpeedDial from "./ProjectSpeedDial";

const ProjectCard = () => {
  const theme = useTheme();

  return (
    <>
      {data.map(
        ({ id, desc, title, stack, web, code, bgLight, bgDark, image }) => (
          <Card
            key={id}
            elevation={0}
            sx={{
              width: { xs: "100%", md: "60%" },
              margin: "20px auto",
            }}
          >
            <CardHeader
              sx={{
                bgcolor: theme.palette.mode === "light" ? bgLight : bgDark,
              }}
              avatar={
                <Avatar variant="rounded" sx={{ width: 60, height: 60 }}>
                  <Image loading="lazy" src={image} alt="project-icon" fill />
                </Avatar>
              }
              title={stack}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <ProjectSpeedDial {...{ web, code }} />
          </Card>
        )
      )}
    </>
  );
};

export default ProjectCard;
