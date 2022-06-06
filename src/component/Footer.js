import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from '@material-ui/core';
// import FacebookIcon from '@mui/icons-material/Facebook';

import '../component/index.css'


function Footer() {

    return (
        <div className="bg-nav">
            <div className="flex justify-center">
                <h className="p-10 text-3xl text-white font-bold">Follow Us On</h>
            </div>
            <div>
              
            </div>

            <Grid container className="">
                <Grid item xs={0}></Grid>
                <Grid item xs={3} className="p-5 pt-0">
                    <div>
                        <div className="flex justify-center">
                            <h className="text-custom text-white font-bold">CAMPUS - ENERGY ACRES</h>
                        </div>
                        <div className="flex justify-center pt-2">
                            <h className="text-custom text-white">P.O BIDHOLI VIA-PREM NAGAR <br/> DEHRADUN-248007</h>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} className="p-5 pt-0">
                    <div className="flex justify-center">
                        <h className="text-custom text-white font-bold">CAMPUS - KNOWLEDGE ACRES</h>
                    </div>
                    <div className="flex justify-center pt-2">
                            <h className="text-custom text-white">P.O BIDHOLI VIA-PREM NAGAR DEHRADUN-248007</h>
                        </div>

                </Grid>
                <Grid item xs={3} className="p-5 pt-0">
                    <div className="flex justify-center">
                        <h className="text-custom text-white font-bold">CORPORATE OFFICE</h>
                    </div>
                    <div className="flex justify-center pt-2">
                            <h className="text-custom text-white">University of Petroleum and Energy StudiesUpper Ground & First Floor, Greater Kailash-II, New Delhi-110048</h>
                        </div>
                </Grid>
                <Grid item xs={3} className="p-5 pt-0">
                    <div className="flex justify-center">
                        <h className="text-custom text-white font-bold">CONTACT</h>
                    </div>
                    <div className="flex justify-center pt-2">
                            <h className="text-custom text-white">TOLL FREE: 18001028737Email: enrollments@upes.ac.in For International Queries : international.admissions@upes.ac.in</h>
                        </div>
                </Grid>
                <Grid item xs={0}></Grid>
            </Grid>

        </div>
    );
}

export default withRouter(Footer);