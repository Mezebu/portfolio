import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Image from "next/legacy/image";
import Box from "@mui/material/Box";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { data } from "./data";

const Works = () => {
  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="my work" title="PERSONAL PROJECTS" />
      {data.map(({ id, desc, title, stack, web, code, desc2, image }) => (
        <Grid container key={id} spacing={3} sx={{ my: 2 }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                opacity: 0.8,
                transition: "all 0.5s ease-in-out",
                "&:hover": { opacity: 1 },
              }}
            >
              <Image
                src={image}
                alt="dashbpard"
                style={{ borderRadius: 7 }}
                layout="responsive"
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography
                sx={{ fontSize: 10, letterSpacing: 2 }}
                color="text.secondary"
                variant="button"
              >
                Project Name
              </Typography>
              <Typography gutterBottom variant="h6" fontWeight={600}>
                {title}
              </Typography>

              <Typography gutterBottom variant="body2">
                {desc}
              </Typography>
              <Typography variant="body2">{desc2}</Typography>
            </Box>

            <Box sx={{ my: 1 }}>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.dark
                      : theme.palette.primary.dark,
                }}
                variant="button"
              >
                {stack}
              </Typography>
            </Box>

            <Box>
              <IconButton
                sx={{
                  "&:hover": { color: (theme) => theme.palette.primary.light },
                }}
                aria-label="delete"
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip title="Github">
                  <GitHubIcon />
                </Tooltip>
              </IconButton>
              <IconButton href={web} target="_blank" rel="noopener noreferrer">
                <Tooltip title="External Link">
                  <LaunchIcon
                    sx={{
                      "&:hover": {
                        color: (theme) => theme.palette.primary.light,
                      },
                    }}
                  />
                </Tooltip>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Works;
