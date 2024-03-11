import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar/Navbar";
import SecServicesFirst from "../../components/secServicesFirst";
import SecServicesSecond from "../../components/secServicesSecond";
import ComponentImg from "../../components/ComponentImg";
import {Grid, TextField} from "@mui/material";
import styles from "./Services.module.css";
import StylesCaptionTitelList from "../../components/StylesCaptionTitelList";
import ContactUs from "../../components/ContactUs";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Services Page</title>
            </Head>
            <Navbar />
            <SecServicesFirst/>
            <SecServicesSecond/>
            <ComponentImg />
            <Grid container sx={{my : 8}}>
                <Grid item xs={12} sm={6} className={styles.boxBodyThree}>
                    <Grid container>
                        <Grid item xs/>
                        <Grid item xs={12} sm={9} sx={{py : { xs : 0 , sm : 10}}}>
                            <StylesCaptionTitelList
                                Color="common.white"
                                STitel="ABOUT COMPANY"
                                MTitel="WE CREATE AND TURN INTO AND TURN INTO"
                                Bcaptiob="We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!"
                                Quotation="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                            />
                        </Grid>
                        <Grid item xs/>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container className={styles.SendEmail}>
                        <Grid item xs={2}/>
                        <Grid item xs className={styles.SendEmailGrid}>
                            <Grid container>
                                <Grid item xs/>
                                <Grid item xs={9} sx={{mt : 9 , height : { sm : "28rem" , xs : "25rem"}}}>
                                    <StylesCaptionTitelList
                                        Color="common.white"
                                        STitel="ABOUT COMPANY"
                                        MTitel="WE CREATE AND TURN INTO AND TURN INTO"
                                        Quotation=" design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                                    />
                                </Grid>
                                <Grid item xs/>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>
            </Grid>
            <ContactUs />
        </>
    );
}
