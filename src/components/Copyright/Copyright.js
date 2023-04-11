import { Box, Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box>
      <Typography variant="subtitle2" align="center">
        <Link
          sx={{ textDecoration: "none" }}
          color="inherit"
          href="https://github.com/mezebu"
          target="_blank"
        >
          Designed & Built by Henry Ezeigwe
        </Link>
      </Typography>
      <Typography variant="subtitle2" align="center">
        © 2022 - Made with{" "}
        <Link
          sx={{ textDecoration: "none" }}
          color="inherit"
          href="https://nextjs.org/"
          target="_blank"
        >
          Nextjs
        </Link>
        {" & "}
        <Link
          sx={{ textDecoration: "none" }}
          color="inherit"
          href="https://mui.com/"
          target="_blank"
        >
          MUI v5
        </Link>
      </Typography>
    </Box>
  );
};

export default Copyright;
