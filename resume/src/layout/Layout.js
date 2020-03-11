import React, { Fragment } from "react";

import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import TextFade from "../transitions/textFade";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: "50vw",
        height: "100vh",
    },
    paperName: {
        //backgroundColor: "#A8D0E6",
    },
}));

export default function Layout(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <Grid container direction="row" alignItems="center">
                <Grid className={classes.grid} item sm={12}>
                    <Paper className={classes.paperName}>
                        <Typography align="center" variant="h2"></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}
