import {Box, Breadcrumbs, Button, Grid, Link, TextField, Typography} from "@mui/material";
import styles from "./Blog.module.css"
import axios from "axios";
import Head from "next/head";
import {useEffect} from "react";

export default function Home({data}) {
    return (
        <>
            <Head>
                <title>Blog Page</title>
            </Head>
            <Grid container>
                <Grid item xs/>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} sx={{width: "100%", height: "7rem"}}/>
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "flex-end"}}>
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
                        <Grid item md={12} lg={8}>
                            {
                                data.map((singleBlog) => (
                                    <Box key={singleBlog.id} sx={{my: 5}}>
                                        <Typography variant="h2" component="h1">
                                            {singleBlog.title}
                                        </Typography>
                                        <Typography variant="h6" component="p" sx={{mt: 2}}>
                                            price : {singleBlog.price} --- id : {singleBlog.id}
                                        </Typography>
                                        <Box sx={{mt: 2}}>
                                            <img src={singleBlog.image} alt="about" className={styles.imgBlog}/>
                                        </Box>
                                        <Typography variant="caption" component="p" sx={{width: "90%"}}>
                                            {singleBlog.description}
                                        </Typography>

                                        <Link href={"blog/" + singleBlog.id}>
                                            <Button variant="outlined"
                                                    sx={{mt: 3, p: 1, width: "7rem", fontSize: "1rem"}}>
                                                seeMOre
                                            </Button>
                                        </Link>
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
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
                                    <Typography variant="h4" component="h1" sx={{mb: 2}} className={styles.TitelCTA}>
                                        ARCHIVES
                                    </Typography>
                                    <Link href="/" passHref>
                                        April 2019
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="outlined" className={styles.BtnSubmit}>
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
export const getServerSideProps = async () =>{
    const data = await axios.get("https://fakestoreapi.com/products")
        .then(res => {
            if(res.status === 200){
                return res.data.slice(0 , 5);
            }

        }).catch(() =>{
            // return alert("خطایی پیش آمد");
        })
    return{
        props: {
            data
        }
    }
}