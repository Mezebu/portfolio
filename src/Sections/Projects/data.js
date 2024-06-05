import { v4 as uuidv4 } from "uuid";
import { dashboard, movie } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    heading: "Movie App",
    image: movie,
    desc: `The Movies App is a dynamic web application built with ReactJS that allows users to search for movies, TV series, and actors. It features a multi-criteria search function, enabling users to find content based on various filters and sorting options. The app includes a user-friendly interface with light and dark mode theming using MUI.`,
    desc2: `Users can also save their favorite movies, actors, and TV series for easy access. The frontend is deployed on AWS S3 and CloudFront, ensuring a fast and reliable user experience. The app integrates with various TMDB API endpoints to provide up-to-date and detailed movie information.`,
    stack:
      "Typescript, Reactjs, Storybook, MUI, TMDB-API, AWS-CDK, React-Query, React-Hook-Form, Vitejs",
    code: "https://github.com/mezebu/moviesApp",
    web: "https://developement--euphonious-malabi-55c3be.netlify.app/",
  },
  {
    id: uuidv4(),
    image: dashboard,
    title: "Dashboard",
    desc: `A dashboard interface designed to provide users with a 
           comprehensive and intuitive way to visualize and analyze data. Built on top of the
           Material-UI library, the dashboard features a sleek and modern design to suit your
           specific needs.`,
    desc2: `It offers a range of visualization tools, including charts, graphs, and 
            tables, that allow you analyze your data in a variety of ways. You can filter, sort, create 
            custom views, and drill down into specific data points to gain deeper
            insights into your data.`,
    stack: `Reactjs, ChartJS, MUI, Firebase, Axios, React Router, Framer Motion`,
    web: "https://transcendent-vacherin-3e33c3.netlify.app/",
    code: "https://github.com/mezebu/admin-dashboard",
  },
];
