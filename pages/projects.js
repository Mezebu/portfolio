import Head from "next/head";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

import { commerce, dashboard } from "../src/assets";
import ProjectTab from "../src/components/ProjectTab/ProjectTab";

const data = [
  {
    id: uuidv4(),
    heading: "Dashboard",
    image: dashboard,
    desc: "dashboard details",
    code: "https://github.com/mezebu/admin-dashboard",
    link: "https://transcendent-vacherin-3e33c3.netlify.app/",
  },
  {
    id: uuidv4(),
    heading: "Commerce",
    image: commerce,
    desc: "commerce details",
    code: "https://github.com/mezebu/commerce-js",
    link: "https://cosmic-licorice-418a80.netlify.app/",
  },
  {
    id: uuidv4(),
    heading: "Weather",
    image: commerce,
    desc: "weather details",
  },
];

const works = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Projects</title>
      </Head>

      <Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              alignItems: "center",
              flexDirection: "column",
              md: "block",
            },
          }}
        >
          <Typography
            sx={{ fontSize: 11, letterSpacing: 3 }}
            color="text.secondary"
            variant="button"
          >
            Projects
          </Typography>
          <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
            PERSONAL PROJECTS
          </Typography>
        </Box>

        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
          porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea
          illo consequatur minus consectetur. Ducimus sunt ab aut sed vel
          cupiditate?
        </Typography>
        <br />
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
          porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea
          illo consequatur minus consectetur. Ducimus sunt ab aut sed vel
          cupiditate?
        </Typography>
        <br />
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
          porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea
          illo consequatur minus consectetur. Ducimus sunt ab aut sed vel
          cupiditate?
        </Typography>
        <Toolbar />
        <Grid container spacing={1}>
          {data.map(({ id, heading, image, desc, code, link }) => (
            <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
              <ProjectTab {...{ heading, image, desc, code, link }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default works;
