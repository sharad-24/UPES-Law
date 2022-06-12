import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../containers/index.css';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import img1 from '../images/sunil.jpg';
import img2 from '../images/mehreen.jpg';
import img3 from '../images/sikhsha.jpg';
import img4 from '../images/vijay.jpg';

function Editors() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <Navbar/>
            <div className="flex justify-center">
                <h className="text-3xl font-bold underline pt-5">Board of Editors</h>

            </div>
            <Grid container className="">
                <Grid item xs={0}></Grid>
                <Grid item xs={6} md={3} lg={3} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 150 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Dr. Sunil Rai
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Vice Chancellor of the University
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} lg={3} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 150 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Mehreen Manzoor
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Assistant Professor
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} lg={3} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 150 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Dr. Shikha Dimri
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Sr. Associate Professor
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={3} lg={3} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 150 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img4}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Dr Vijay Kumar Singh
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Dean, School of Law
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={0}></Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default withRouter(Editors);