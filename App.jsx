import React, {useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from "./components/themeConfig";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import {CssBaseline, Grid} from "@mui/material";
const App = () => {

    return (
        <Grid container sx={{overflowX :"hidden"}}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        <Route path="/blog" element={<Blog />}></Route>
                    </Routes>
                </Router>
                <Footer />
            </ThemeProvider>
        </Grid>
    );
};

export default App;