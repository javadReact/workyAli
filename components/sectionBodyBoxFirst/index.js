import React, {useEffect, useState} from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from "./SectionBox.module.css";
import StylesCaptionTitelList from "../StylesCaptionTitelList";
import axios from "axios";
import StylesCaptionTitel from "@/components/StylesCaptionTitel";

const Index = () => {
    const [cloth , setcloth] = useState([]);
    const [clothBox , setclothBox] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setcloth(res.data.slice(0 , 1))
                setclothBox(res.data.slice(3 , 4))
                console.log(cloth)
            })
    },[]);
    return (
        <>
            <Grid container sx={{my: { xs: 0, lg: "-5vw",sm : "-7vw"}, zIndex: 2, position: "relative"}}>
                <Grid item xs/>
                <Grid item xs={12} sm={6}>
                    <div className={styles.bodySectionImgFirst}>
                        <div className={styles.warpbody}>
                            {
                                cloth.map((cloth , index) =>(
                                    <StylesCaptionTitelList
                                        key={index}
                                        Color="common.white"
                                        STitel={cloth.category}
                                        MTitel={cloth.title}
                                        Bcaptiob={cloth.description}
                                    />
                                ))
                            }
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
                                    {
                                        cloth.map((cloth , index) =>(
                                            <StylesCaptionTitelList
                                                key={index}
                                                Color="common.white"
                                                STitel={cloth.category}
                                                MTitel="WORKING ON EXCLUSIVE PROJECTS"
                                                Bcaptiob={cloth.description}
                                            />
                                        ))
                                    }
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