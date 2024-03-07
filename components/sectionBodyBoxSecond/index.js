import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import styles from "./secBodySec.module.css"
import StylesCaptionTitel from "../StylesCaptionTitel";
import ContactUs from "../ContactUs";
import ComponentImg from "../ComponentImg";
const Index = () => {
    return (
        <>
            <Grid container>
                <Grid item xs/>
                <Grid item xs={9} sm={12}>
                    <Grid container>
                        <Grid item xs/>
                        <Grid item xs={12} sm={9}>
                            <StylesCaptionTitel
                                Stitel="ABOUT COMPANY"
                                Mtitel="WE CREATE AND TURN INTO REALITY"
                                PScaption="All our team collaborates with our clients, across all of our 3 offices,All our team collaborates with our clients, across all of our 3 offices,"
                                PLcaption="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                            />
                        </Grid>
                        <Grid item xs/>
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
            <Grid container sx={{mt : {xs : 0 , sm : 10}}} justifyContent="center" alignItems="center">
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item >
                  <img className={styles.displayImg} src="/images/gallery-1.jpg"  alt="gallery1"/>
                </Grid>
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item>
                    <img className={styles.displayImg} src="/images/gallery-2.jpg" alt="gallery2"/>
                </Grid>
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item>
                    <img className={styles.displayImg} src="/images/gallery-3.jpg" alt="gallery3"/>
                </Grid>
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item>
                    <img className={styles.displayImg} src="/images/gallery-4-600x616.jpg"  alt="gallery4"/>
                </Grid>
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item>
                    <img className={styles.displayImg} src="/images/gallery-5-600x616.jpg" alt="gallery5"/>
                </Grid>
                <Grid xs={6} sm={4} className={styles.displayContainer} justifyContent="center" alignItems="center" item>
                    <img className={styles.displayImg} src="/images/gallery-6-600x616.jpg" alt="gallery6"/>
                </Grid>
            </Grid>
            <Grid container sx={{mt : 4}} justifyContent="center" alignItems="center">
                <Button
                    sx={{mt : 6}}
                    color="primary" variant="contained">
                    VIEW MORE
                </Button>

            </Grid>
            <ComponentImg />
            <ContactUs/>
        </>

    );
};

export default Index;