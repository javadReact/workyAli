import React from 'react';
import {Grid, Typography} from "@mui/material";
import styles from "./AboutThirst.module.css";
import StylesCaptionTitel from "../StylesCaptionTitel";
const Index = () => {
    return (
        <>
            <Grid container sx={{my : 7}}>
                <Grid item xs/>
                <Grid item xs={9} >
                    <Grid container sx={{mb : 6}}>
                        <StylesCaptionTitel
                            Stitel="ABOUT COMPANY"
                            Mtitel="WE CREATE AND TURN INTO REALITY"
                            PScaption="We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!"
                            PLcaption="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                        />
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={4} className={styles.boxImgAbout} sx={{mt : {xs : 5}}}>
                            <img src="/images/about-team-members_03.jpg" alt="about-team-members_03"/>
                            <Typography variant="h5" component="h5" sx={{mt : 3}}>MARRY HOPKINS</Typography>
                            <Typography variant="h6" component="h6">ARCHITECT</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} className={styles.boxImgAbout} sx={{mt : {xs : 5}}}>
                            <img src="/images/about-team-members_05.jpg" alt="about-team-members_05"/>
                            <Typography variant="h5" component="h5" sx={{mt : 3}}>JOHN SMITH</Typography>
                            <Typography variant="h6" component="h6">MANAGING PARTNER</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} className={styles.boxImgAbout} sx={{mt : {xs : 5}}}>
                            <img src="/images/about-team-members_07.jpg" alt="about-team-members_07"/>
                            <Typography variant="h5" component="h5" sx={{mt : 3}}>SAM ROBERTS</Typography>
                            <Typography variant="h6" component="h6">DESIGNER</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs/>

            </Grid>
        </>
    );
};

export default Index;