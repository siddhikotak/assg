import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { colors } from "../../themes/mainTheme/colors";
import { SIDEBAR_WIDTH } from "../../utils";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import mainTheme from "../../themes/mainTheme";
import secondaryTheme from "../../themes/secondaryTheme"
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    height: "auto",
    position: "relative",
  },
  mainContainer: {
    marginLeft: SIDEBAR_WIDTH + "px",
    minHeight: "100vh",
    background: colors.background.default,
    marginTop: "60px",
  },
});

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const [theme, setTheme] = useState()


  useEffect(() => {
    let appTheme = localStorage.getItem("theme")
    console.log(appTheme)
    if (appTheme === null) {
      localStorage.setItem("theme", "blue")
      setTheme("blue")
    } else {
      setTheme(appTheme)
    }
  }, [])

  return (
    <ThemeProvider theme={theme === "blue" ? mainTheme : secondaryTheme}>
      <div className={classes.root}>
        <Navbar />
        <Sidebar setTheme={setTheme} />
        <div className={classes.mainContainer}>
          {children}
        </div>
      </div>
    </ThemeProvider>

  );
};

export default MainLayout;
