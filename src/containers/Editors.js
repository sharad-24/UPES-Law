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

import img3 from '../images/img3.jpeg';

function Editors() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <Navbar/>
            <div className="flex justify-center">
                <h className="text-3xl font-bold underline pt-5">Board of Editors/Board of Advisors/Peer Review Board</h>

            </div>
            <Grid container className="">
                <Grid item xs={0}></Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Mamta Rana
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Associate Professor of Law at HNBGU
                                        A Central University of Garhwal.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Himanshu Pandey
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Associate Professor of Law, MNLU Nagpur
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Priya A Sondhi
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Associate Professor Bennet University, Greater Noida
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Rana Navneet Roy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Associate Professor, HNLU
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        DR. Sharanjit
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Associate Professor, RGNUL
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Dolly Jabbal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Professor, NLUO
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>

                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Sachiv Kumar
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Joint Registrar NCLT Ahmedabad Bench
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Prof. (Dr.) Sreejith S.G.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Professor and Executive Dean, Jindal Global Law School,
                                        O.P. Jindal Global University
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Dr. Sandeepa Bhat
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Professor, WBNUJS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Prof. (Dr.) Ajay Kumar
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        CNLU Patna
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Chandra Shekhar
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        District Judge, Delhi
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={6} md={2} lg={2} className="p-5 pt-10">
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
                                        Raghavend GR
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Joint Secretary, Department of Justice Ministry of Law &amp; Justice,
                                        Government of India
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                {/* <Grid item xs={2} className="p-5 pt-10">
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
                                    
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid> */}

                <Grid item xs={0}></Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default withRouter(Editors);