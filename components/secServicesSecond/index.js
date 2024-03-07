import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from "./ServicesSecond.module.css";
import StylesCaptionTitel from "../StylesCaptionTitel";

const Index = () => {
    return (
        <>
            <Grid container className={styles.secPricesPlan}>
                <Grid container sx={{mt: 6}}>
                    <Grid xs/>
                    <Grid item xs={9}>
                        <StylesCaptionTitel
                            Color="common.white"
                            Stitel="ABOUT COMPANY"
                            Mtitel="WE CREATE AND TURN INTO REALITY"
                            PScaption=""
                            PLcaption="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                        />
                    </Grid>
                    <Grid xs/>
                </Grid>
                <Grid container>
                    <Grid xs/>
                    <Grid xs={9} className={styles.displayPrices}>
                        <Grid container>
                            <Grid item xs={12} sm={4} className={styles.boxPriceOne}>
                                    <Typography variant="h2" component="h1" color="common.black" >BASIC</Typography>
                                    <Typography variant="h2" color="primary">$29.00</Typography>
                                    <Typography variant="h6" marginTop="1rem">Interior Design</Typography>
                                    <Typography variant="h6" marginTop="1rem">Space Planning</Typography>
                                    <Typography variant="h6" marginTop="1rem">Project
                                        Management</Typography>
                                    <Typography variant="h5" fontWeight="100" marginTop="1rem">Interior Design</Typography>
                                    <Button
                                        color="primary" variant="contained"
                                        className={styles.boxBtnView}
                                    >
                                        VIEW MORE
                                    </Button>
                            </Grid>
                            <Grid item xs={12} sm={4} className={styles.boxPriceTwo}>
                                <Typography variant="h2" color="common.white" fontWeight="bold">BASIC</Typography>
                                <Typography variant="h2" color="common.white" fontWeight="bold">$29.00</Typography>
                                <Typography variant="h6" color="common.white" fontWeight="100" marginTop="1rem">Interior
                                    Design</Typography>
                                <Typography variant="h6" color="common.white" fontWeight="100" marginTop="1rem">Space
                                    Planning</Typography>
                                <Typography variant="h6" color="common.white" fontWeight="100" marginTop="1rem">Project
                                    Management</Typography>
                                <Typography variant="h6" color="common.white" fontWeight="100" marginTop="1rem">Interior
                                    Design</Typography>
                                <Button
                                    color="primary" variant="contained"
                                    className={styles.boxBtnViewMore}
                                >
                                    VIEW MORE
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={4} className={styles.boxPriceThree}>
                                <Typography variant="h2" color="common.black" fontWeight="bold">BASIC</Typography>
                                <Typography variant="h2" fontWeight="bold" color="primary">$29.00</Typography>
                                <Typography variant="h6" fontWeight="100" marginTop="1rem">Interior Design</Typography>
                                <Typography variant="h6" fontWeight="100" marginTop="1rem">Space Planning</Typography>
                                <Typography variant="h6" fontWeight="100" marginTop="1rem">Project
                                    Management</Typography>
                                <Typography variant="h5" fontWeight="100" marginTop="1rem">Interior Design</Typography>
                                <Button
                                    color="primary" variant="contained"
                                    className={styles.boxBtnView}
                                >
                                    VIEW MORE
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs/>
                </Grid>
            </Grid>
        </>
    );
};

export default Index;