import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="subtitle2" align="center">
      <MuiLink
        sx={{ textDecoration: "none" }}
        color="inherit"
        href="https://github.com/mezebu"
        target="_blank"
      >
        {"Ezeigwe Henry © "}
      </MuiLink>{" "}
      {new Date().getFullYear()} - Made with{" "}
      <MuiLink
        sx={{ textDecoration: "none" }}
        color="inherit"
        href="https://nextjs.org/"
        target="_blank"
      >
        Nextjs
      </MuiLink>
      {" & "}
      <MuiLink
        sx={{ textDecoration: "none" }}
        color="inherit"
        href="https://mui.com/"
        target="_blank"
      >
        MUI v5
      </MuiLink>
    </Typography>
  );
};

export default Copyright;
