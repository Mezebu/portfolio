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
        paper: "#fff",
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
        paper: "#fff",
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
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      secondary: {
        main: "#f50057",
        light: "#ff4081",
        dark: "#c51162",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "#fff",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "#fff",
      },
      text: {
        primary: "#212121",
        secondary: "#757575",
        disabled: "#bdbdbd",
        hint: "#757575",
      },
      background: {
        paper: "#fff",
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
        default: "rgb(255, 234, 188)",
      },
    },
    typography: {
      fontFamily: "Work Sans",
      fontWeightBold: 700,
    },
  }),
};

export default themes;
