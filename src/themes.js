import { createTheme } from "@mui/material/styles";

const themes = {
  default: createTheme({
    palette: {
      primary: {
        main: "#00a79c",
      },
      secondary: {
        main: "#ce93d8",
      },
      error: {
        main: "#ce93d8",
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
      fontWeightBold: 700,
    },
  }),
  red: createTheme({
    palette: {
      primary: {
        main: "#FF4136",
      },
      background: {
        default: "rgb(255, 243, 226)",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
  blue: createTheme({
    palette: {
      primary: {
        main: "#0074D9",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
  green: createTheme({
    palette: {
      primary: {
        main: "#1b5e20",
      },
      background: {
        default: "rgb(200, 230, 201)",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
  purple: createTheme({
    palette: {
      primary: {
        main: "#B10DC9",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: "#ce93d8",
      },
      background: {
        default: "rgb(0, 30, 60)",
        paper: "rgb(0, 30, 50)",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
  orange: createTheme({
    palette: {
      primary: {
        main: "#ffa726",
      },
      background: {
        default: "rgb(255, 224, 178)",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
};

export default themes;
