import React, { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { errorpage } from "../src/assets";

import { FlexJustifyCenter } from "../styles/globalStyles";

const FourOhFour = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | 404 - Page Not Found</title>
      </Head>
      <Box>
        <FlexJustifyCenter>
          <Image src={errorpage} alt="error-image" width={600} />
        </FlexJustifyCenter>

        <Box sx={{ my: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            align="center"
            gutterBottom
          >
            Page not found
          </Typography>
          <Typography
            fontWeight={600}
            variant="subtitle2"
            align="center"
            gutterBottom
          >
            This page {"doesn't"} exist or has been removed! <br />
            Please go back to the home page
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            disableElevation
            startIcon={<ArrowBackRoundedIcon />}
            sx={{ textTransform: "none" }}
            component={Link}
            href="/"
          >
            Back to home page
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FourOhFour;
