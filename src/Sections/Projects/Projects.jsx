import { Box, Toolbar } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Dashboard from "./Dashboard/Dashboard";
import WeatherApp from "./WeatherApp/WeatherApp";

const Works = () => {
  return (
    <Box>
      <SectionHeader subTitle="my work" title="RECENT WORKS" />

      <WeatherApp />
      {/* <Dashboard /> */}
      <Toolbar />
    </Box>
  );
};

export default Works;
