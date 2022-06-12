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

import img1 from '../images/sol_1.jpg';
import img2 from '../images/design.png';
import img3 from '../images/court.jpg';
import img4 from '../images/classroom.jpg';
import img5 from '../images/computing.jpg';
import img6 from '../images/hostel.jpg';


function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Navbar />
            <Grid item container>
                <Grid item xs={12}>
                    <img src={img1} alt="loading" />
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item xs={12} md={2} lg={2}>
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <div className="flex justify-center">
                        <h className="text-3xl font-bold underline pt-5 pb-5">DESIGN YOUR OWN DEGREE</h>
                    </div>
                    <div className="flex justify-center"></div>
                    <img src={img2} alt="loading" />
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                </Grid>
            </Grid>

            <div className="flex justify-center">
                <h className="text-3xl font-bold underline pt-5 pb-5">DESIGN YOUR OWN DEGREE</h>
            </div>

            <Grid item container>
                <Grid item xs={0} md={2} lg={2}>
                </Grid>
                <Grid item xs={12} md={2} lg={2} className="p-5">
                    <img className="imgWidth" src={img3} alt="loading" />
                    <div className="flex justify-center">
                        <h className="text-3xl font-bold underline pt-5 pb-5">Moot Court</h>
                    </div>

                </Grid>
                <Grid item xs={12} md={2} lg={2} className="p-5">
                    <img className="imgWidth" src={img4} alt="loading" />
                    <div className="flex justify-center">
                        <h className="text-3xl font-bold underline pt-5 pb-5">Classroom</h>
                    </div>

                </Grid>
                <Grid item xs={12} md={2} lg={2} className="p-5">
                    <img className="imgWidth" src={img5} alt="loading" />
                    <div className="flex justify-center">
                        <h className="text-3xl font-bold underline pt-5 pb-5">Computing Centre</h>
                    </div>

                </Grid>
                <Grid item xs={12} md={2} lg={2} className="p-5">
                    <img className="imgWidth" src={img6} alt="loading" />
                    <div className="flex justify-center">
                        <h className="text-3xl font-bold underline pt-5 pb-5">Hostel</h>
                    </div>

                </Grid>
                <Grid item xs={0} md={2} lg={2}>
                </Grid>
            </Grid>

            <Footer />
        </>
    );
}

export default withRouter(Home);