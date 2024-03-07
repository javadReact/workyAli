import React from 'react';
import SectionAboutFirst from "../components/sectionAboutFirst/about";
import SectionAboutSecond from "../components/sectionAboutSecond";
import SectionAboutThirst from "../components/sectionAboutThirst";
import SectionAboutFourth from "../components/sectionAboutFourth";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <SectionAboutFirst/>
            <SectionAboutSecond/>
            <SectionAboutThirst/>
            <SectionAboutFourth/>
        </>
    );
};

export default About;