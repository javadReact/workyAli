import React from 'react';
import {Grid, Typography} from "@mui/material";
import styles from "./style.module.css";

const Index = () => {
    return (
        <>
            <Grid container sx={{mt : 10}}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <Typography color="common.black" variant="h3" component="p">PARTNERS</Typography>
                            <Typography color="common.black" sx={{ mt : 4 }} variant="h2" component="h1">OUR CLIENTS &
                                <br/> PARTNERS</Typography>
                            <div color="primary" className={styles.boxBodyTextLine}></div>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Grid container className={styles.boxBodyImgOne}>
                                <Grid item xs>
                                    <img src="/images/home-brands-1.png" alt="home-brands-1"/>
                                </Grid>
                                <Grid item xs>
                                    <img src="/images/home-brands-2.png" alt="home-brands-2"/>
                                </Grid>
                                <Grid item xs>
                                    <img src="/images/home-brands-3.png" alt="home-brands-3"/>
                                </Grid>
                            </Grid>
                            <Grid container className={styles.boxBodyImgOne} sx={{ mt : 3}}>
                                <Grid item xs>
                                    <img src="/images/home-brands-4.png" alt="home-brands-1"/>
                                </Grid>
                                <Grid item xs>
                                    <img src="/images/home-brands-5.png" alt="home-brands-5"/>
                                </Grid>
                                <Grid item xs>
                                    <img src="/images/home-brands-6.png" alt="home-brands-6"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
        </>
    );
};

export default Index;