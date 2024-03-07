import {AppBar, Box, Toolbar, Typography, Grid, IconButton, Menu, MenuList, MenuItem} from "@mui/material";
import styles from "./Navbar.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link"
import {useRouter} from "next/router";
const inter = Inter({ subsets: ["latin"] });
const navItems = [
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
// const router = useRouter();
export default function Home() {
    return (
        <>
            <AppBar position="fixed" className={styles.menu}>
                <Grid container>
                    <Grid item xs />
                    <Grid item xs={9}>
                        <Toolbar sx={{height : "5.65rem" , py :0}}>
                            <Grid container>
                                <Grid item xs sx={{flexGrow: 1}}>
                                    <Image src="/images/logo.webp" width="200" height="50" alt="Logo"/>
                                </Grid>
                            </Grid>
                            <Grid item xs sx={{display : {xs : "none" , sm : "flex"}}}>
                                    {
                                        navItems.map((link) =>(
                                                <Link href={link.path} passHref>
                                                    <Typography color="common.white" className={styles.navText}>{link.name}</Typography>
                                                </Link>
                                        ))
                                    }
                                {/*{*/}
                                {/*    navItems.map(nav => (*/}
                                {/*        <NavLink to={nav.path}>*/}
                                {/*            <Typography color="common.white" className={styles.navText}>{nav.name}</Typography>*/}
                                {/*        </NavLink>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </Grid>
                        </Toolbar>
                    </Grid>
                    <Grid item xs/>
                </Grid>
            </AppBar>
        </>
    );
}
