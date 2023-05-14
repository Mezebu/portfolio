// Import dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { CacheProvider } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
// Import Toastify CSS
import "react-toastify/dist/ReactToastify.css";

// Import custom modules
import Layout from "../src/components/Layout/Layout";
import ThemeContext from "../src/ThemeContext";
import themes from "../src/themes";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browsers.
const clientSideEmotionCache = createEmotionCache();

// prettier-ignore
export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps } ) {
  const router = useRouter();

  // Declare state variable 'selectedTheme' and function 'setSelectedTheme'
  // Initialize 'selectedTheme' to "default"
  const [selectedTheme, setSelectedTheme] = useState("default");

  // Update 'selectedTheme' to new value and store in 'localStorage'
  const handleThemeChange = (newTheme) => {
    setSelectedTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  // Retrieve previously selected theme from 'localStorage' and set as current value
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setSelectedTheme(savedTheme);
    }
  }, []);

  return (
    <React.StrictMode>
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
                  duration: 0.7,
                  times: [0, 0.5, 0.6, 0.7],
                }}
              >
                <Layout>
                  <React.Fragment>
                    <Component {...pageProps} />
                    <ToastContainer />
                  </React.Fragment>
                </Layout>
              </motion.div>
            </AnimatePresence>
          </ThemeProvider>
        </ThemeContext.Provider>
      </CacheProvider>
    </React.StrictMode>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
