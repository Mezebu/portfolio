import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/legacy/image";
import { dashboard, sun } from "../../../assets";

const Dashboard = () => {
  return (
    <Box sx={{ px: 8 }}>
      <Card
        variant="outlined"
        sx={{
          position: "relative",
          /* left: { lg: 420, md: 300, sm: 120 },
          bottom: 50, */
          maxWidth: 600,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "inherit" }} aria-label="weather-icon">
              <Image src={sun} alt="weather-app" loading="lazy" />
            </Avatar>
          }
          title={<Typography variant="button">Dashboard</Typography>}
          subheader="Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2">
            A simple weather app that collects weather data and time from a{" "}
            {"user's"} geolocation, as well as weather data across various
            cities all over the world using {"openweathermap's"} API.
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 600 }}>
        <Image
          src={dashboard}
          alt="weather-app"
          layout="responsive"
          loading="lazy"
        />
      </Card>
    </Box>
  );
};

export default Dashboard;
