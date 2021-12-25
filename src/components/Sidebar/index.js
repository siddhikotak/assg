import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { SIDEBAR_WIDTH } from "../../utils";
import { colors as Blue } from "../../themes/mainTheme/colors"
import { colors as Green } from "../../themes/secondaryTheme/colors"
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({

  container: {
    marginTop: 20,
    display: "flex",
  },
  blueCircle: {
    height: 34,
    width: 34,
    borderRadius: 50,
    backgroundColor: Blue.primary.main,
    cursor: "pointer",
    margin: 10
  },
  greenCircle: {
    height: 34,
    width: 34,
    borderRadius: 50,
    backgroundColor: Green.primary.main,
    cursor: "pointer",
    margin: 10
  }
}));

const Container = styled(Paper)(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  height: "100vh",
  position: "fixed",
  top: 0,
  backgroundColor: theme.palette.background.main
}));

const Sidebar = ({ setTheme }) => {
  const classes = useStyles();

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  return (
    <Container>
      <div style={{ margin: 10 }}>
        <Typography variant="h3">Change Theme</Typography>
      </div>
      <div className={classes.container}>
        <div className={classes.blueCircle} onClick={() => changeTheme("blue")}></div>
        <div className={classes.greenCircle} onClick={() => changeTheme("green")}></div>
      </div>
    </Container >
  );
};

export default Sidebar;
