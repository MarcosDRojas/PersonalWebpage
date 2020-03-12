import React, { Fragment } from "react";

import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import TextFade from "../transitions/textFade";

const useStyles = makeStyles((theme) => ({
    // paperName: {
    //     height: "50%",
    //     width: "50%",
    // },
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        height: "100%",
        width: "100%",
    },
    mainContainer: {
        height: "600px",
        width: "1200px",
    },
}));

export default function Layout(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <div>
                <Grid container className={classes.mainContainer}>
                    <Grid container item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3">Hello World! My name is Marcos Rojas</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}
