import Head from "next/head";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

import { calculator, commerce, dashboard, weather } from "../src/assets";
import ProjectTab from "../src/components/ProjectTab/ProjectTab";

const data = [
  {
    id: uuidv4(),
    heading: "Weather App",
    image: weather,
    desc: `A simple weather app that  uses OpenWeatherMap, a third-party API that allows a user get
           up-to-date weather information for any location on the planet, including over 200,000
           cities.`,
    desc2: `Some other features include; fetching the user’s geolocation, the ability to view weather
           data in either Celsius or Fahrenheit and the current time of any location inputted by the
           user.`,
    stack: "OpenWeatherMap API, MUI, Nextjs, Axios, Moment, Momemt-Timezone",
    code: "https://github.com/mezebu/weather",
    link: "https://fanciful-marshmallow-d4a254.netlify.app/",
  },
  {
    id: uuidv4(),
    heading: "Calculator",
    image: calculator,
    desc: `I created this Calculator using JavaScript, as well as HTML and CSS web programming. 
           This Calculator does fundamental operations such as addition, multiplication, subtraction, 
           and division, as well as computes a variety of percentage values, such as the % difference 
           between two supplied numbers.`,
    code: "https://github.com/mezebu/calculator",
    link: "https://mezebu.github.io/calculator/",
    stack: "HTML, CSS, Javascript",
  },
  {
    id: uuidv4(),
    heading: "Dashboard",
    image: dashboard,
    desc: `A simple Dashboard interface designed to provide users with a 
           comprehensive and intuitive way to visualize and analyze data. Built on top of the
           Material-UI library, the dashboard features a sleek and modern design with customizable
           components that can be tailored to suit your specific needs.`,
    desc2: `The dashboard offers a range of data visualization tools, including charts, graphs, and 
            tables, that allow you to explore and analyze your data in a variety of ways. You can filter
            and sort data, create custom views, and drill down into specific data points to gain deeper
            insights into your data.`,
    stack: `Reactjs, ChartJS, MUI, Firebase, Axios, React Router, Framer Motion`,
    code: "https://github.com/mezebu/admin-dashboard",
    link: "https://transcendent-vacherin-3e33c3.netlify.app/",
  },
  {
    id: uuidv4(),
    heading: "CommerceJS",
    image: commerce,
    desc: `An e-commerce app that uses Commerce JS headless SDK. It provides users with a
           smooth shopping experience that isn’t limited to a single product checkout flow but can
           add multiple items to a shopping cart and allow the user to manage that cart.`,
    desc2: `The shopping cart can include how many products someone wants to purchase, which
            products they wish to purchase, the total cost, and the shipping cost depending on the
            address provided. Users can also filter the products based and categories and prices.
            These features, together with the product information, all contribute to a very dynamic
            experience that will guide the user through the checkout process.`,
    stack: "Reactjs, @chec/commerceJs, MUI, React-Hook-Form, React Router",
    code: "https://github.com/mezebu/commerce-js",
    link: "https://cosmic-licorice-418a80.netlify.app/",
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
        <Typography variant="body1" gutterBottom>
          In my spare time, I enjoy creating personal projects that give me the
          opportunity to experiment with new technologies and programming
          languages, which can helps improve my skills and stay up-to-date with
          the latest trends in frontend development.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Having creative freedom is another benefit of working on personal
          projects. This freedom allows me to design projects that are in line
          with my interests and hobbies, which can be inspiring and fun.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Overall, building personal projects as a frontend developer can be a
          rewarding experience that helps me improve my skills, build my
          portfolio, and solve real-world problems. It is also a fun and
          creative way I explore my interests and passions while learning new
          things.
        </Typography>
        <Toolbar />
        <Grid container spacing={1}>
          {data.map(
            ({ id, heading, image, desc, desc2, code, link, stack }) => (
              <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
                <ProjectTab
                  {...{ heading, image, desc, desc2, code, stack, link }}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default works;
