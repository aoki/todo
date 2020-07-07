import Head from "next/head";
import React, { useContext } from "react";
import { ThemeContext } from "../contexsts/theme-context";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext)
  const clickHandler = () => {
    console.log("Click")
    themeContext.setTheme(themeContext.theme.name === "light" ? "dark" : "light")
  }

  return (
    <div className="main" onClick={clickHandler}>
      <Head>
        <title>Hello Nextron</title>
      </Head>
      <div>
        <h1> Electron + Next.js </h1>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
        h1 {
          user-select: none;
          font-weight: 100;
          display: inline;
          margin-right: 0.5em;
          margin-left: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
