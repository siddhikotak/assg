import { Typography, Button } from "@mui/material";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  },
  mainContainer: {
    padding: 10
  },
  image: {
    width: "auto",
    height: 700,
    borderRadius: 10,
    marginTop: 10,
  },
  details: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  desp: {
    paddingTop: 20
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 20,
  padding: theme.spacing(2),
  borderRadius: 7,
  color: theme.palette.primary.dark,
}));

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 20
}))

const Course = () => {
  const classes = useStyles()
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Container>
        <div className={classes.buttonContainer}>
          <StyledButton onClick={() => navigate("/")}>Go Back to Pokemon List</StyledButton>
        </div>
        <div className={classes.mainContainer}>
          <Typography variant="h1">{state.name}</Typography>
          <Typography variant="h4">{state.subtitle}</Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={state.images.large} alt={state.images.large} className={classes.image}></img>
          </div>
        </div>
      </Container>
    </MainLayout >
  );
};

export default Course;

