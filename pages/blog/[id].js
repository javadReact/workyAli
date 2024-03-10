import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import styles from "./Blog.module.css";
import {Breadcrumbs, Grid, Link, Box, Typography} from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const SingleBlog = () => {
    const {query} = useRouter();
    const [data , setData] = useState({});
    useEffect(() => {
        if(query.id)
        {
            axios.get("https://fakestoreapi.com/products/" + query.id)
                .then(res => {
                    setData(res.data)
                })
        }
    }, [query]);

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            {

                <Grid container>
                    <Grid item xs/>
                    <Grid item xs={9}>
                        <Box sx={{width: "100%", height: "7rem"}}></Box>
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
                            <Link
                                underline="hover"
                                color="common.black"
                                href={"/Blog/" + data.id}
                            >
                                {data.id}
                            </Link>
                        </Breadcrumbs>
                        <Box sx={{my: 4}}>
                            <Typography variant="h2" component="h1">
                                {data.title}
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} md={4}>
                                    <img src={data.image} alt="Fuck Next JS" className={styles.SingleBlog}/>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h2" className={styles.mtBlog}>Price
                                        : {data.price} $</Typography>
                                    <Typography variant="caption" className={styles.mtBlog}>description
                                        : {data.description}<br/></Typography>

                                    <Typography variant="subtitle1" className={styles.mtBlog}>category
                                        : {data.category}</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs/>
                </Grid>


            }

        </>
    );
};

export default SingleBlog;