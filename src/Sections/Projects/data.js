import { v4 as uuidv4 } from "uuid";
import { dashboard, weatherApp } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    bgLight: "#4db6ac",
    bgDark: "#004d40",
    title: "CommerceJs",
    desc: `A simple weather app that collects weather data and time from a
            user's geolocation, as well as weather data across various
            cities all over the world using "openweathermap's API.`,
    stack: "Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone",
    web: "https://transcendent-vacherin-3e33c3.netlify.app/",
    code: "https://github.com/mezebu/admin-dashboard",
    image: dashboard,
  },
  {
    id: uuidv4(),
    bgLight: "#bbdefb",
    bgDark: "#1a237e",
    title: "Weather App",
    desc: `A simple weather app that collects weather data and time from a
            user's geolocation, as well as weather data across various
            cities all over the world using "openweathermap's API.`,
    stack: "Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone",
    web: "https://fanciful-marshmallow-d4a254.netlify.app/",
    code: "https://github.com/mezebu/weather",
    end: "flex-end",
    image: weatherApp,
  },
  /*   {
    id: uuidv4(),
    bgLight: "#4db6ac",
    bgDark: "#004d40",
    title: "Dashboard",
    desc: `A simple weather app that collects weather data and time from a
            user's geolocation, as well as weather data across various
            cities all over the world using "openweathermap's API.`,
    stack: "Reactjs, OpenWeatherMap API, MUI, Nextjs, Axios, Momemt-Timezone",
    web: "https://transcendent-vacherin-3e33c3.netlify.app/",
    code: "https://github.com/mezebu/admin-dashboard",
    image: dashboard,
  }, */
];
