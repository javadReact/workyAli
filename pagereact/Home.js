import React from 'react';
import styles from './Home.module.css';
import SectionBodyBox from "../components/sectionBodyBoxFirst";
import SectionText from '../components/sectionBodyBoxSecond'
import Slider from "../components/Slider/Slider";
import InfoWebSite from "../components/sectionBodyBoxInfo";
import {CssBaseline} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs";
import ComponentImg from "../components/ComponentImg";
    const Home = () => {
    return (
        <>
            <Navbar />
            <Slider/>
            <InfoWebSite/>
            <SectionBodyBox />
            <SectionText />
        </>
    );
};

export default Home;