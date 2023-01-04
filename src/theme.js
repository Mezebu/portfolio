import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00a79c",
    },
    secondary: {
      main: "#ce93d8",
    },
    error: {
      main: red.A400,
    },
    info: {
      main: "#00a79c",
    },
    background: {
      default: "rgb(234, 234, 234)",
    },
  },
  typography: {
    fontFamily: "Work Sans",
  },
});

export default theme;
