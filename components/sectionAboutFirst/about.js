import React from 'react';
import {Breadcrumbs, Grid, Link, Typography} from "@mui/material";
import styles from "./AboutFirst.module.css";
import StylesCaptionTitelList from "../StylesCaptionTitelList";
const About = () => {
    return (
        <>
            <Grid container className={styles.slideAbout}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} sx={{width : "100%" , height : "7rem"}} />
                        <Grid item xs={12} sx={{display : "flex" , justifyContent : "flex-end"}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="common.black" href="/">
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    color="common.black"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                        <Grid container sx={{mt : 3}}>
                            <Grid item xs={12} sm={6} sx={{mb : {xs : 4}}}>
                                <StylesCaptionTitelList
                                    Color="black"
                                    STitel="ADVANTAGES"
                                    MTitel="WORKING ON EXCLUSIVE PROJECTS"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img src="/images/about.jpg" alt="about" className={styles.BoxImageAbout}/>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" component="p" sx={{mt : {md : 2}}}>
                                            We apply innovative design solutions to enhance people’s residential
                                            wellbeing and to help workplaces succeed! All our team collaborates with our
                                            clients!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{my : 4 }}>
                                        <Typography className={styles.boxBodyTextPar} variant="caption" component="p">
                                            All our team collaborates with our clients, across all of our 3 offices,
                                            which are located throughout the US. Our mission is to implement the
                                            outstanding design ideas and solutions for any project we’re working on…
                                            During that process we carefully combine client’s guidelines, technical
                                            possibilities, as well as the environmental issues. Engineering and interior
                                            design solutions that we deliver are usually born after a collaborative
                                            process.
                                        </Typography>
                                    </Grid>
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

export default About;