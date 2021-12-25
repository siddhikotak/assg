/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const useStyles = makeStyles(theme => ({
    image: {
        width: "100%",
        height: "250px",
        borderRadius: 5
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    body: {
        paddingTop: theme.spacing(1),
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    attacks: {
        display: "flex",
        alignItems: "center"
    }
}))

const Item = styled(Paper)(({ theme }) => ({
    // height: "250px",
    padding: theme.spacing(2),
    borderRadius: 7,
    backgroundColor: theme.palette.background.default,
}));

export default function Card({ cardData }) {
    const navigate = useNavigate()
    const classes = useStyles()
    const [attacks, setAttacks] = useState([])
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        cardData?.attacks?.forEach(el => {
            attacks.push(el.name)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardData.attacks])

    useEffect(() => {
        cardData?.abilities?.forEach(el => {
            abilities.push(el.name)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardData.abilities])

    return (
        <Item elevation={3}>
            <img src={cardData.images.large} alt="" className={classes.image} />
            <div className={classes.title}>
                <Typography variant="h3" >{cardData.name}</Typography>
                <Typography variant="h3" style={{ display: "flex", alignItems: "center" }}>HP:<Typography variant="subtitle1" className={classes.hp}>{cardData.hp}</Typography></Typography>
            </div>
            <div style={{ height: 100 }}>
                <Typography variant="h4" className={classes.body}>Attacks:</Typography>
                {
                    attacks.length === 0 ? <Typography variant="subtitle2">N/A</Typography> :
                        < Typography variant="subtitle2">{attacks?.join(",")}</Typography>
                }
                <Typography variant="h4" className={classes.body}>Abilities:</Typography>
                {
                    abilities.length === 0 ? <Typography variant="subtitle2">N/A</Typography> :
                        < Typography variant="subtitle2">{abilities?.join(",")}</Typography>
                }
            </div>
            <div className={classes.button}>
                <Button color="primary" variant="contained" onClick={() => navigate(`/pokemon/${cardData.id}`, { state: cardData })}>View More</Button>
            </div>
        </Item >
    )
}
