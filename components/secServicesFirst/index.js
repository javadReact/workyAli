import React from 'react';
import {Breadcrumbs, Grid, Link, Typography} from "@mui/material";
import styles from "./ServicesFirst.module.css";
import StylesCaptionTitel from "../StylesCaptionTitel";

const Index = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs sx={{width : "100%" , height : "8rem"}}>
                </Grid>
            </Grid>
            <Grid container className={styles.slideAbout}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} sx={{display : "flex" , justifyContent : "flex-end"}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="common.black" href="/">
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    color="common.black"
                                    href="/Services"
                                >
                                    Services
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container xs={12}>
                                <StylesCaptionTitel
                                    Stitel="ABOUT COMPANY"
                                    Mtitel="WE CREATE AND TURN INTO REALITY"
                                    PScaption="WE CREATE AND TURN INTO REALITY , WE CREATE AND TURN INTO REALITY"
                                    PLcaption="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/pencil-ruler.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/map.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/tree.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/couch.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/apartment.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{mt : 3}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={3} sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                                    <img className={styles.boxImgSer} src="/images/color-sampler.webp" alt="pencil-ruler"/>
                                                </Grid>
                                                <Grid item xs={9} sx={{padding : 2}}>
                                                    <Typography variant="h5">INTERIOR PLANING</Typography>
                                                    <Typography variant="caption">
                                                        A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.
                                                    </Typography>                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
        </div>
    );
};

export default Index;