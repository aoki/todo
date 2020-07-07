import React, { useContext } from "react";
import "../styles.css";
import TitleBar from "../components/title-bar";
import { ThemeContext, useTheme } from "../contexsts/theme-context";

const MyApp = ({ Component, pageProps }) => {
  const theme = useTheme();
  console.log(`Render ${theme.theme.name}`)

  return (
    <ThemeContext.Provider value={theme}>
      <div className="main">
        <TitleBar {...pageProps} />
        <Component {...pageProps} />
        <style jsx>{`
          .main {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${theme.theme.background};
            color: ${theme.theme.color};
            transition: 0.5s;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
};

export default MyApp;
