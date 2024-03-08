import {AppBar, Box, Toolbar, Typography, Grid, IconButton, Menu, MenuList, MenuItem} from "@mui/material";
import styles from "./Navbar.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link"
import {useRouter} from "next/router";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
const inter = Inter({ subsets: ["latin"] });
import NavDrawer from  "../NavDrawer";
const navItemsDrawer = [
    {
        path : "/",
        name : "Home"
    },
    {
        path : "/about",
        name : "About"
    }
    ,{
        path : "/services",
        name : "Services"
    },
    {
        path : "/blog",
        name : "Blog"
    }
]


export default function Home() {
    return (
        <>
            <AppBar position="fixed" className={styles.menu}>
                <Grid container>
                    <Grid item xs />
                    <Grid item xs={9}>
                        <Toolbar sx={{height : "5.65rem" , py :0}}>
                            <Grid container>
                                <Grid item xs={9} sx={{flexGrow : 1}}>
                                    <Image src="/images/logo.webp" width="200" height="50" alt="Logo"/>
                                </Grid>
                                <Grid item xs={3} sx={{display : {xs : "none" , sm : "flex"}}}>
                                    <Link href="/" passHref={false} className={styles.navText}>
                                        <Typography color="common.white">Home</Typography>
                                    </Link>
                                    <Link href="/about" passHref={false} className={styles.navText}>
                                        <Typography color="common.white">About</Typography>
                                    </Link>
                                    <Link href="/services" passHref={false} className={styles.navText}>
                                        <Typography color="common.white">Services</Typography>
                                    </Link>
                                    <Link href="/blog" passHref={false} className={styles.navText}>
                                        <Typography color="common.white">Blog</Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={3} sx={{display: {xs: "block", sm: "none"}}}>
                                    <NavDrawer />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Grid>
                    <Grid item xs/>
                </Grid>
            </AppBar>
        </>
    );
}
