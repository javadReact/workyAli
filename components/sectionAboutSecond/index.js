import React, {useEffect, useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Grid, Typography} from "@mui/material";
import styles from "./AboutSecond.module.css";
import CountUp from "react-countup";
import {ExpandMore} from "@mui/icons-material";

const Index = () => {
    const [expanded , setExpanded] = useState(false);
    const handleChange = (isExpanded ,panel)=>{
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} sm={7} className={styles.BoxOneAccr}>
                            <Grid container>
                                <Grid item xs/>
                                <Grid item xs={9} sm={7} className={styles.BoxOneAccrSec}>
                                    <Typography color="common.white" variant="h3" component="h3">ADVANTAGES</Typography>
                                    <Typography color="common.white" variant="h2" component="h1" sx={{mt: 3}}>EXCLUSIVE
                                        PROJECTS</Typography>
                                    <div color="primary" className={styles.boxBodyTextLine}></div>
                                    <Accordion expanded={expanded === "panel1"} onChange={(event,isExpanded) => handleChange(isExpanded,'panel1')}>
                                        <AccordionSummary
                                            id="panel1-header"
                                            aria-controls="panel1-content"
                                            expandIcon={<ExpandMore/>}
                                        >
                                            <Typography variant="h3" component="h1">
                                                Acourdeon 1
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" component="p">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which dont look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isnt
                                                anything embarrassing hidden in the
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === "panel2"} onChange={(event,isExpanded) => handleChange(isExpanded,'panel2')}>
                                        <AccordionSummary
                                            id="panel2-header"
                                            aria-controls="panel2-content"
                                            expandIcon={<ExpandMore/>}
                                        >
                                            <Typography variant="h3" component="h1">
                                                Acourdeon 2
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" component="p">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which dont look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isnt
                                                anything embarrassing hidden in the
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === "panel3"} onChange={(event,isExpanded) => handleChange(isExpanded,'panel3')}>
                                        <AccordionSummary
                                            id="panel3-header"
                                            aria-controls="panel3-content"
                                            expandIcon={<ExpandMore/>}
                                        >
                                            <Typography variant="h3" component="h1">
                                                Acourdeon 3
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" component="p">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which dont look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isnt
                                                anything embarrassing hidden in the
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === "panel4"} onChange={(event,isExpanded) => handleChange(isExpanded,'panel4')}>
                                        <AccordionSummary
                                            id="panel3-header"
                                            aria-controls="panel3-content"
                                            expandIcon={<ExpandMore/>}
                                        >
                                            <Typography variant="h3" component="h1">
                                                Acourdeon 4
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" component="p">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which dont look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isnt
                                                anything embarrassing hidden in the
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Grid item xs/>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs/>
                        <Grid item xs={12} sm={6} className={styles.boxSecTwo}>
                            <div className={styles.bodySectionImgFirst}>
                                <Grid padding="3rem" alignItems="flex-start">
                                    <Typography color="common.white" variant="h3" component="h3"
                                    >IMPORTANT MILESTONES</Typography>
                                    <Typography color="common.white" variant="h2" component="h1" fontWeight="bold"
                                                sx={{mt: 3}}>WHAT WE</Typography>
                                    <Typography color="common.white" fontSize="3rem" fontWeight="bold" variant="h2">
                                        ACCOMPLISHED</Typography>
                                    <Grid marginTop="2rem" color="primary" className={styles.boxBodyTextLine}></Grid>

                                    <Grid xs={12} sx={{mt: 8}}>
                                        <Grid container>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={365}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">FINISHED
                                                    PROJECTS</Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={28}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">DESIGN
                                                    AWARDS</Typography>
                                            </Grid>
                                            <Grid xs={0} sm={4}/>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={18}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">YEARS IN
                                                    INDUSTRY</Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={724}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">HAPPY
                                                    CLIENTS</Typography>
                                            </Grid>
                                            <Grid xs={4}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Index;