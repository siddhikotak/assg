import React, { useState, useEffect, useRef } from "react";
import { Paper, Grid, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import MainLayout from "../../components/MainLayout";
import Cards from "./components/Cards"
import { makeStyles } from "@mui/styles";

const CardContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  background: theme.palette.background.main,
}));

const useStyles = makeStyles({
  loader: {
    width: "100%",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

const Home = () => {
  const classes = useStyles()
  const TOTAL_PAGE_COUNT = 10
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((no) => no + 1);
        }
      })
  );

  const fetchPokemon = () => {
    setLoading(true);
    fetch(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`)
      .then(res => res.json())
      .then(res => {
        let all = new Set([...pokemon, ...res.data]);
        setPokemon([...all]);
        setLoading(false);
      })
  }

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    if (page <= TOTAL_PAGE_COUNT) { fetchPokemon() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])



  return (
    <MainLayout>
      <CardContainer>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {
              pokemon?.map((el, idx) => {
                return (
                  <Grid item xs={12} md={3} key={idx} >
                    <div ref={setLastElement}>
                      <Cards cardData={el} />
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
          {loading && <div className={classes.loader}><CircularProgress /> </div>}
        </Box>
      </CardContainer>

    </MainLayout>
  );
};

export default Home;
