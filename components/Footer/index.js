import React from 'react';
import styles from "./Footer.module.css";
import {Grid} from "@mui/material";
import Image from "next/image";
const Index = () => {
    return (
        <>
            <Grid container sx={{mt : 10 , padding : 6}} justifyContent="center" alignItems="center" className={styles.FooterImg}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Image src="/images/Group-2.1-1.png" width={980} height={200} className={styles.imgFooter} alt="Group"/>
                </Grid>
                <Grid item xs/>
            </Grid>
            <div className={styles.FooterThanks}>
                © 2019 year. Worky Lite | Multipurpose Theme design by TemplateMonster
            </div>
        </>
    );
};

export default Index;