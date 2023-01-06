import { v4 as uuidv4 } from "uuid";
import { business, dashboard, sun, weatherApp } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    altName: "weather-app",
    title: "Weather App",
    desc: `A simple weather app that collects weather data and time from a
            user's geolocation, as well as weather data across various
            cities all over the world using "openweathermap's API.`,
    stack: "Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone",
    web: "https://fanciful-marshmallow-d4a254.netlify.app/",
    code: "https://github.com/mezebu/weather",
    avi: "W",
    image: weatherApp,
  },
  {
    id: uuidv4(),
    altName: "dashboard",
    title: "Dashboard",
    desc: `A simple weather app that collects weather data and time from a
            user's geolocation, as well as weather data across various
            cities all over the world using "openweathermap's API.`,
    stack: "Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone",

    web: "https://transcendent-vacherin-3e33c3.netlify.app/",

    code: "https://github.com/mezebu/admin-dashboard",

    avi: "D",
    image: dashboard,
  },
];
