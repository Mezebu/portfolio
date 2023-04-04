import { v4 as uuidv4 } from "uuid";
import { commerce, dashboard } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    title: "CommerceJs",
    desc: `An e-commerce app that uses Commerce JS headless SDK. It provides users with a
           smooth shopping experience, with the ability to add multiple items to a shopping cart and allow the user to manage that cart.`,
    desc2: `Users can also filter the products based and categories and prices. These features, together with the product information, all contribute to a very dynamic
            experience that will guide the user through the checkout process.`,
    stack: "Reactjs, @chec/commerceJs, MUI, React-Hook-Form, React Router",
    web: "https://cosmic-licorice-418a80.netlify.app/",
    code: "https://github.com/mezebu/commerce-js",
    image: commerce,
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
  },
];
