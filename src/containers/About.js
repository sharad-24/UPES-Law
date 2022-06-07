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

import img1 from '../images/law-school.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <div className="flex justify-center">
            <h className="text-3xl font-bold underline pt-5">ABOUT US</h>

        </div>
            <Grid container className="">
                <Grid item xs={0}></Grid>
                <Grid item xs={4} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        About UPES (Including Vision &amp; Mission):
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        UPES was established in the year 2003 through
                                        the UPES Act, 2003 of the State Legislature of Uttarakhand. With an ambitious vision and
                                        peerless approach, UPES emerged as an innovative institution offering industry-specialised
                                        undergraduate and postgraduate courses in the fields of Engineering, Business, Law, Design,
                                        Health Sciences, and the newest of the lot – Modern Media.
                                        <br /> <br/>
                                        The university’s singular purpose is to enable each one to achieve their purpose in life, through
                                        the guiding light of knowledge. UPES believes that each one is empowered to pursue their
                                        dreams and passions in a meaningful and responsible manner. Thus, enabling one to choose life’s
                                        pathways that fulfil their individual purposes fruitfully is the ultimate motivation of UPES.
                                        UPES is a multidisciplinary university with disciplines of engineering, computer science, design,
                                        business, health sciences, modern media, liberal studies and law, recognized by UGC and
                                        accredited by NAAC with A Grade.  Law School of UPES is ranked in top 25 NIRF (2021).
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={4} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        About UPES Law Review:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        UPES Law Review is the leading academic annual peer reviewed
                                        journal emanating and embracing legal scholarship, of School of Law, University of Petroleum
                                        and Energy Studies, Dehradun, published by Eastern Book Company. It had its inception in 2013
                                        when it published its first volume and received the ISSN Number: 2347-9620 and RNI number.
                                        The Law Review does not only maintain its high standards for publication but also the highest
                                        level of integrity, transparency and consistency and has been working towards creating a
                                        landscape to promote qualitative and scholarly research. Know more about the last volume.
                                        <br />
                                        <br />
                                        <a href="https://www.scconline.com/blog/post/2021/03/24/upes-law-review/">https://www.scconline.com/blog/post/2021/03/24/upes-law-review/</a>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs={4} className="p-5 pt-10">
                    <div data-aos="flip-up">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        About UPES Student Law Review:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        UPES Student Law Review (USLR) is a bi-annual,
                                        student coordinated, double-blind peer-reviewed legal e-journal based at School of Law,
                                        University of Petroleum and Energy Studies. The publication is entirely produced by the student
                                        board of the University under the supervision of accomplished faculty advisors and an expert
                                        peer review board.
                                        <br />
                                        <br />
                                        The USLR Journal aims to publish comprehensive treatments of subjects (“articles/essays”),
                                        written by law students, legal scholars, professors, jurists, and all diverse members of the legal
                                        fraternity as well as shorter pieces, such as “notes” and “comments”.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={0}></Grid>
            </Grid>
        </>
    );
}

export default withRouter(About);