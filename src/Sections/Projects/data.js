import { v4 as uuidv4 } from "uuid";
import { commerce, dashboard, weather } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    title: "CommerceJs",
    desc: `An e-commerce app that uses Commerce JS headless SDK. It provides users with a
           smooth shopping experience, with the ability to add multiple items to a shopping cart and allow the user to manage that cart.`,
    desc2: `Users can also filter the products based and categories and prices. These features, together with the product information, all contribute to a very dynamic
            experience that will guide the user through the checkout process.`,
    stack: "Reactjs, @chec/commerceJs, MUI, React-Hook-Form, Reacr Router",
    web: "https://cosmic-licorice-418a80.netlify.app/",
    code: "https://github.com/mezebu/commerce-js",
    image: commerce,
  },
  {
    id: uuidv4(),
    title: "Weather App",
    desc: `A simple weather app that  uses OpenWeatherMap, a third-party API that allows a user get
           up-to-date weather information for any location on the planet, including over 200,000
           cities.`,
    desc2: `Some other features include; fetching the user’s geolocation, the ability to view weather
           data in either Celsius or Fahrenheit and the current time of any location inputted by the
           user.`,
    stack: "OpenWeatherMap API, MUI, Nextjs, Axios, Moment, Momemt-Timezone",
    web: "https://fanciful-marshmallow-d4a254.netlify.app/",
    code: "https://github.com/mezebu/weather",
    end: "flex-end",
    image: weather,
  },
  /* {
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
