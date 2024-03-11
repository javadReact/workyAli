import {ThemeProvider} from "@mui/material";
import theme from "@/components/themeConfig";
import "@/styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Layout from "@/components/Layout";
import React from "react";
import NextProgress from "nextjs-progressbar"
export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <NextProgress color="#f7992b"/>
                <Component {...pageProps} />
                <Footer/>
            </Layout>
        </ThemeProvider>
    );
}
