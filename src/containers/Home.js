import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import '../containers/index.css';
import { Grid } from "@material-ui/core";

import img1 from '../images/law-school.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';


function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Navbar />
            <Grid item container>
            <Grid item xs={12}>
            <img src={img1} alt="loading"/>
            </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default withRouter(Home);