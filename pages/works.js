import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { commerce, dashboard } from "../src/assets";
import ProjectTab from "../src/components/ProjectTab/ProjectTab";

const data = [
  {
    id: uuidv4(),
    heading: "Dashboard",
    image: dashboard,
    desc: "dashboard details",
  },
  {
    id: uuidv4(),
    heading: "Commerce",
    image: commerce,
    desc: "commerce details",
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
    <Box>
      <Typography
        sx={{ fontSize: 11, letterSpacing: 3 }}
        color="text.secondary"
        variant="button"
      >
        My Work
      </Typography>
      <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
        RECENT WORKS
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
        porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea illo
        consequatur minus consectetur. Ducimus sunt ab aut sed vel cupiditate?
      </Typography>
      <br />
      <br />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
        porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea illo
        consequatur minus consectetur. Ducimus sunt ab aut sed vel cupiditate?
      </Typography>
      <br />
      <br />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi hic
        porro distinctio voluptas consequuntur ipsum ipsam, repudiandae ea illo
        consequatur minus consectetur. Ducimus sunt ab aut sed vel cupiditate?
      </Typography>
      <Toolbar />
      <Grid container spacing={2}>
        {data.map(({ id, heading, image, desc }) => (
          <Grid key={id} item lg={6} md={6} xs={12}>
            <ProjectTab heading={heading} image={image} desc={desc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default works;
