import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(0, 30, 60)",
      paper: "rgb(0, 30, 50)",
    },
  },
  typography: {
    fontFamily: "Work Sans",
  },
});

export default darkTheme;
