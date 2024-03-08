import {Inter} from "next/font/google";
import {Box, Breadcrumbs, Button, Grid, Link, TextField, Typography} from "@mui/material";
import styles from "./Blog.module.css"
import Image from "next/image";
const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs />
                <Grid item sm={9}>
                    <Grid container>
                        <Grid item xs={12} sx={{width : "100%" , height : "7rem"}} />
                        <Grid item xs={12} sx={{display : "flex" , justifyContent : "flex-end"}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="common.black" href="/">
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    color="common.black"
                                    href="/blog"
                                >
                                    Blog
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h2" component="h1">
                                Fitting a Square Building
                            </Typography>
                            <Typography variant="h6" component="p" sx={{mt : 2}}>
                                by : admin ---- date : April --- In : Uncategorized
                            </Typography>
                            <Box sx={{ mt : 2 }}>
                                <Image src="/images/about.jpg" alt="about" width="700" height="400"/>
                            </Box>
                            <Typography variant="caption" component="p" sx={{width : "90%"}}>
                                ssibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={9}>
                                    <TextField
                                        sx={{my: 4}}
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Search....."

                                    />
                                    <hr className={styles.Line}/>
                                    <Typography variant="h4" component="h1" className={styles.TitelCTA}>
                                        RECENT POSTS
                                    </Typography>
                                    <Typography variant="h3" component="h1" className={styles.TitelCTA}>
                                        Fitting a Square Building
                                    </Typography>
                                    <Typography variant="h3" component="h1" className={styles.TitelCTA}>
                                        MODERN EXTENSION TO BRICK HOUSE
                                    </Typography>
                                    <Typography variant="h3" component="h1" className={styles.TitelCTA}>
                                        Groundbreaking Women in Construction
                                    </Typography>
                                    <hr className={styles.Line}/>
                                    <Typography variant="h4" component="h1" className={styles.TitelCTA}>
                                        RECENT COMMENTS
                                    </Typography>
                                    <hr className={styles.Line}/>
                                    <Typography variant="h4" component="h1" sx={{ mb : 2}} className={styles.TitelCTA}>
                                        ARCHIVES
                                    </Typography>
                                    <Link href="/" passHref>
                                        April 2019
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                <Button variant="contained" className={styles.BtnSubmit}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs/>
            </Grid>
        </>
    );
}
