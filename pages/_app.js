import React, { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

import createEmotionCache from "../src/createEmotionCache";
import Layout from "../src/components/Layout/Layout";
import ThemeContext from "../src/ThemeContext";
import themes from "../src/themes";

// Client-side cache, shared for the whole session of the user in the browsers.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  const [selectedTheme, setSelectedTheme] = useState("default");

  const handleThemeChange = (newTheme) => {
    setSelectedTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setSelectedTheme(savedTheme);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={{ handleThemeChange, selectedTheme }}>
        <ThemeProvider theme={themes[selectedTheme] || themes.default}>
          <CssBaseline />
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                times: [0, 0.5, 0.6, 0.7],
              }}
            >
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
