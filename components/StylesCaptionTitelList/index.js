import React from 'react';
import styles from "./styles.module.css";
import {Grid, Typography} from "@mui/material";

const Index = (props) => {
    return (
        <>
            <Typography color={props.Color} variant="h3" component="h3">{props.STitel}</Typography>
            <Typography color={props.Color} className="mtInfo" variant="h2" component="h1">{props.MTitel}</Typography>
            <div color="primary" className={styles.boxBodyTextLine}></div>
            <Grid item xs={10} sx={{padding : 0}}>
                <Typography  color={props.Color} variant="subtitle2" component="p" sx={{mt : 5}}>
                    {props.Bcaptiob}
                </Typography>
                <Typography color={props.Color} variant="caption" component="p">
                    {props.Quotation}
                </Typography>
            </Grid>
        </>
    );
};

export default Index;