import React, { Fragment } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Head from "next/head";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FlexGrid } from "../styles/globalStyles";
import { zero, four } from "../src/assets";
import Image from "next/image";
import Link from "../src/Link";

const FourOhFour = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | 404 - Not Found</title>
      </Head>
      <Box sx={{ my: 5 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "tween",
          }}
          exit={{ opacity: 0 }}
        >
          <FlexGrid container spacing={2}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={four} alt="four" layout="intrinsic" />
                <Image src={zero} alt="zero" layout="intrinsic" />
                <Image src={four} alt="four" layout="intrinsic" />
              </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box sx={{ my: 5 }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 600 }}
                  align="center"
                  gutterBottom
                >
                  Oops....
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 500 }}
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
                  please go back to the home page
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<ArrowBackRoundedIcon />}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  noLinkStyle
                  href="/"
                >
                  Back to home page
                </Button>
              </Box>
            </Grid>
          </FlexGrid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FourOhFour;
