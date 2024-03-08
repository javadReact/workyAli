import React from 'react';
import styles from "./style.module.css";
import {Grid, Typography} from "@mui/material";
const Index = (props) => {
    return (
        <>
            <Grid container sx={{height : {xs : "30rem" ,sm : "20rem"}}}>
                <Grid container className={styles.boxBodyText} justifyContent="center">
                    <Grid item xs={12} sm={5}>
                        <Typography variant="h3" component="h3" color={props.Color}>{props.Stitel}</Typography>
                        <Typography className="mtInfo" variant="h2" component="h1" color={props.Color}>{props.Mtitel}</Typography>
                        <div color="primary" className={styles.boxBodyTextLine}></div>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography  variant="subtitle2" component="p" color={props.Color}>
                            {props.PScaption}
                        </Typography>
                        <Grid container>
                            <Grid item xs sx={{mt : 4 }}>
                                <Typography variant="caption" component="p" color={props.Color}>
                                    {props.PLcaption}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Index;