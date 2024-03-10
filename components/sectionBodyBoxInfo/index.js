import {Grid, Typography} from "@mui/material";
import styles from "./Info.module.css";
import StylesCaptionTitel from "../StylesCaptionTitel";
import {Inter} from "next/font/google";
import {useEffect, useState} from "react";
import axios from "axios";

const inter = Inter({subsets: ["latin"]});
//
export default function Home() {
    const [cloth , setcloth] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setcloth(res.data.slice(0 , 1))
                console.log(res.data)
            })
    },[])
    return (
        <>

            <Grid container sx={{position : "relative" , zIndex : 3}} >
                <Grid item xs/>
                <Grid item xs={9}>
                    {
                        cloth.map((cloth) =>(
                            <StylesCaptionTitel
                                key={cloth.id}
                                Stitel={cloth.category}
                                Mtitel={cloth.title}
                                PScaption="We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!"
                                PLcaption={cloth.description}
                            />
                        ))
                    }
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

