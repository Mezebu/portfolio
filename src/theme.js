import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#ce93d8",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(250, 243, 224)",
    },
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

export default theme;
