import React from 'react';
import {Grid, Typography} from "@mui/material";
import styles from "./styles.module.css";
const Loading = () => {
    return (
        <>
            <Grid container className={styles.py24}>
                <Grid item xs className={styles.containerItem}>
                    <Typography variant="h2" component="h1">
                        Loading...
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Loading;