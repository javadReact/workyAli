import React, {useEffect, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@mui/material";
import styles from "./AboutSecond.module.css";
import CountUp from "react-countup";

const Index = () => {
    const [accordion, setAccordion] = useState();

    const handleChange = id => ()=> setAccordion(id);
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
                                    <Typography color="common.white" variant="h2" component="h1" sx={{mt : 3}}>EXCLUSIVE
                                        PROJECTS</Typography>
                                    <Grid marginTop="2rem" color="primary" className={styles.boxBodyTextLine}></Grid>
                                    <Accordion className={styles.Accr} sx={{mt : 4}} expanded={accordion === "panel1"} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography fontSize={20}>Collapsible Group Item #1</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className={styles.Accr} expanded={accordion === "panel2"} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Typography fontSize={20}>Collapsible Group Item #2</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className={styles.Accr} expanded={accordion === "panel3"} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography fontSize={20}>Collapsible Group Item #3</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
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
                        <Grid item xs />
                        <Grid item xs={12} sm={6} className={styles.boxSecTwo}>
                            <div className={styles.bodySectionImgFirst}>
                                <Grid padding="3rem" alignItems="flex-start">
                                    <Typography color="common.white" variant="h3" component="h3"
                                                >IMPORTANT MILESTONES</Typography>
                                    <Typography color="common.white" variant="h2" component="h1" fontWeight="bold"
                                                sx={{mt : 3}}>WHAT WE</Typography>
                                    <Typography color="common.white" fontSize="3rem" fontWeight="bold" variant="h2">
                                        ACCOMPLISHED</Typography>
                                    <Grid marginTop="2rem" color="primary" className={styles.boxBodyTextLine}></Grid>

                                    <Grid xs={12} sx={{mt : 8}}>
                                        <Grid container>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={365}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">FINISHED PROJECTS</Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={28}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">DESIGN AWARDS</Typography>
                                            </Grid>
                                            <Grid xs={0} sm={4} />
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={18}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">YEARS IN INDUSTRY</Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={4} className={styles.color}>
                                                <CountUp
                                                    start={0}
                                                    end={724}
                                                    duration={3}
                                                />
                                                <Typography color="common.white" variant="subtitle1">HAPPY CLIENTS</Typography>
                                            </Grid>
                                            <Grid xs={4} />
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