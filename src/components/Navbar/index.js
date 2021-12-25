import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    overflow: "hidden",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Pokemon App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
