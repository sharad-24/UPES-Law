import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../containers/About";
import Editors from "../containers/Editors";
import CallForPaper from "../containers/CallForPaper";

import '../containers/index.css';


function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Navbar />
            <About/>
            <Editors/>
            <CallForPaper/>
            <Footer />
        </>
    );
}

export default withRouter(Home);