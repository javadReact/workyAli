import React from 'react';
import {Grid, TextField, Typography} from "@mui/material";
import styles from "./styles.module.css";

const Index = () => {
    return (
        <>
            <Grid container sx={{mt : 15}}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <Typography color="common.black" variant="h3" component="p" sx={{fontWeight : "900"}}>LET’S GET IN TOUCH</Typography>
                            <Typography color="common.black" sx={{ mt : 4 }} variant="h2" component="h1">CONTACT DETAILS</Typography>
                            <div color="primary" className={styles.boxBodyTextLine}></div>
                            <Grid container sx={{mt: 4}} className={styles.boxBodyFlexDir}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">Phone: (555)123-4567</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">E-mail: info@demolink.org</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">Address: Alexandria, 32 Washingtorn str, 22303</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">Opening hours:</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">Monday — Thursday 10:00 – 23:00</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6">Friday — Sunday 10:00 – 19:00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Grid container>
                                <Grid item xs={12} sx={{mt : 5}}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{mt : 5}}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Number"
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{mt : 5}}>
                                    <TextField
                                        id="filled-multiline-static"
                                        label="Multiline"
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                        variant="filled"
                                        fullWidth
                                    />
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