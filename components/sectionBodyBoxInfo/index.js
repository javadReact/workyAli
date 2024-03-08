import {Grid, Typography} from "@mui/material";
import styles from "./Info.module.css";
import StylesCaptionTitel from "../StylesCaptionTitel";
// import axios from "axios";
import {Inter} from "next/font/google";
// import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    // const [cloth , setClouth] = useState([]);
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products')
    //         .then(res => {
    //             console.log(res)
    //         })
    // },[])
    return (
        <>
            <Grid container sx={{position : "relative" , zIndex : 3}} >
                <Grid item xs/>
                <Grid item xs={9}>
                    <StylesCaptionTitel
                        Stitel="ABOUT COMPANY"
                        Mtitel="WE CREATE AND TURN INTO REALITY"
                        PScaption="We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!"
                        PLcaption="All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process."
                    />
                    <Grid container className={styles.BoxBodyImg} sx={{mt : 20}}  alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={4} sx={{display : "flex"}} justifyContent="center" alignItems="center">
                            <div className={styles.bodyArchitecture}>
                                <Typography variant="h5" component="h1">ARCHITECTURE</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{display : "flex"}} justifyContent="center" alignItems="center">
                            <div className={styles.bodyEngineering}>
                                <Typography variant="h5" component="h1">ENGINEERING</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{display : "flex"}} justifyContent="center" alignItems="center">
                            <div className={styles.bodyInteriorDesign}>
                                <Typography variant="h5" component="h1">INTERIOR DESIGN</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
        </>
    );
}

