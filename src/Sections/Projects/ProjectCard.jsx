import { useTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import { data } from "./data";
import ProjectSpeedDial from "./ProjectSpeedDial";

const ProjectCard = () => {
  const theme = useTheme();

  return (
    <Box>
      {data.map(
        // prettier-ignore
        ({ id, desc, title, stack, web, code, bgLight, bgDark, image, end }) => (
          <Box key={id} sx={{display: 'flex', justifyContent: end, my: 5}}>
            <Card elevation={0} sx={{ width: { xs: "100%", md: "70%" } }}>
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
          </Box>
        )
      )}
    </Box>
  );
};

export default ProjectCard;
