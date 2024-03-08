import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from "./SectionBox.module.css";
import StylesCaptionTitelList from "../StylesCaptionTitelList";

const Index = () => {
    return (
        <>
            <Grid container sx={{my: { xs: 0, lg: "-5vw",sm : "-7vw"}, zIndex: 2, position: "relative"}}>
                <Grid item xs/>
                <Grid item xs={12} sm={6}>
                    <div className={styles.bodySectionImgFirst}>
                        <div className={styles.warpbody}>
                            <StylesCaptionTitelList
                                Color="common.white"
                                STitel="TESTIMONIALS"
                                MTitel="WHAT OUR"
                                Bcaptiob="It is not every construction company that can build a building from ground up and complete 80,000 sq. ft. of first class office improvement space in 13 months."
                                Quotation="KENT, POSTED ON EVERYWHERE"
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container sx={{zIndex : 1, position: "relative"}} >
                <Grid item xs={12} sm={9}>
                    <Grid container className={styles.bodySectionImgSecond}>
                        <Grid item xs />
                        <Grid item xs={9} sm={8}>
                            <Grid container className={styles.mtSection}>
                                <Grid item xs={12}>
                                    <StylesCaptionTitelList
                                        Color="common.white"
                                        STitel="TESTIMONIALS"
                                        MTitel="WHAT OUR"
                                        Bcaptiob="It is not every construction company that can build a building from ground up and complete 80,000 sq. ft. of first class office improvement space in 13 months."
                                        Quotation="KENT, POSTED ON EVERYWHERE"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        sx={{mt : 5}}
                                        color="primary" variant="contained">
                                        VIEW MORE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
        </>
    );
};

export default Index;