import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../containers/index.css';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function CallForPaper() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <h className="text-3xl font-bold underline pt-5">CALL FOR PAPER</h>
            </div>
            <Grid container className="">
                <Grid item xs={0}></Grid>
                <Grid item xs={12} className="p-5 pt-10">
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Introduction</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The journal is now entering its 7 th cycle and we are delighted to invite submissions from
                                    academicians, professionals, industry experts etc.,on ‘Azadi ka Amrit Mahotsav –
                                    Transformation of Law and Justice in the last 75 years’.<br /><br />
                                    ‘Azadi Ka Amrit Mahotsav’ is an initiative of the Indian government to celebrate and
                                    commemorate 75 years of progressive independent India and the glorious history of its people,
                                    culture and achievements. This Mahotsav is dedicated to the people of India who have been
                                    instrumental in bringing India this far in its evolutionary journey and they also have the power
                                    and potential to activate India 2.0, fueled by the spirit of ‘Atmanirbhar Bharat’. ‘Azadi Ka Amrit
                                    Mahotsav’ is an embodiment of all that is progressive about India’s socio-cultural, political and
                                    economic identity. One of the primary focus of this celebration is to document our unsung
                                    heroes, lesser known personalities and places that have made invaluable contributions in the
                                    freedom struggle of India.<br /><br />
                                    The period after Indian independence was one of great optimism, as the basic institutional
                                    structure for development was put in place through the enunciation of new policies, setting up of
                                    new institutions, and enactment of the basic legal structure underlying economic activities. A
                                    certain degree of success was achieved during this period in rousing a somnolent economy, with
                                    economic planning, import substitution and self-reliance as the basic guiding principles.
                                    However, resting on our past laurels is not enough, it is pertinent for everyone to develop India
                                    in the coming times and particularly the legal fraternity should get into action so that the

                                    suppressed and oppressed people in our country get their entitlements without any dilution or
                                    diversion.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Upcoming Volume</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>The upcoming Volume wants to invite legal scholarship that can highlight the transformation of
                                        law and policy over the last few decades, the evolution of justice administration in the country
                                        and its ultimate impact on common man’s access to justice. The following sub-themes are
                                        suggested:</h>
                                    <br />
                                    <h>1) Evolution of justice administration in the last 75 years</h><br />
                                    <h>2) Evolution of intellectual property rights in the post TRIPS era.</h><br />
                                    <h>3) Evolution of labour laws in industrial establishments.</h><br />
                                    <h>4) Gender neutrality and women empowerment</h><br />
                                    <h>5) Evolution of ‘corporate criminal liability’</h><br />
                                    <h>6) Constitutional challenges in the last 75 years</h><br />
                                    <br />
                                    <h>Note: The above sub-themes are only illustrative. UPES Law Review would welcome papers on
                                        other topics related to <br /> <b>‘Transformation of Law and Justice in the last 75 years’.</b></h>
                                    <br /><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>TIMELINE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>1) Submission of Extended Abstract = 31 st March 2022</h><br />
                                    <h>2) Communication of Acceptance of Abstract = 4 th April 2022</h><br />
                                    <h>3) Submission of Full Paper = 10 th June 2022</h><br />
                                    <h>4) Publication of the Volume = Oct/Nov 2022</h><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>SUBMISSION GUIDELINES</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>1) Submissions can be in the form of articles, research papers and short notes. The
                                        acceptable word limit should not exceed:<br />
                                        o Long Articles/Research Papers: 7000 to 9000 words (inclusive of footnotes)<br />
                                        o Short Articles/Short Notes: 4000 to 5000 words (inclusive of footnotes)</h><br /><br />
                                    <h>2) All the submissions must consist of an Extended Abstract of not more than 1000 words,<br />
                                        which shall comprise of central research question to be examined in the proposed<br />
                                        research paper along with the proposed title and keywords. The abstract will not be
                                        included in the word limit.</h><br /><br />
                                    <h>3) A submission can be co-authored by a maximum of two people. <br /> Submissions are invited
                                        from academicians, practitioners, industry experts and research scholars.</h><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>FORMAT AND CITATION GUIDELINES</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>1) Submission in a Microsoft Word-compatible format (.doc or .docx preferred).</h><br />
                                    <h>2) Font type and size of main text must be in Times New Roman 12 point font.</h><br />
                                    <h>3) Main title should be in full capitals, bold and centered 16 point font.</h><br />
                                    <h>4) Sub-titles should be in sentence case, bold and 12 point font.</h><br />
                                    <h>5) Footnotes should be in Times New Roman font size 10.</h><br />
                                    <h>6) Citation must be in Bluebook Uniform Style of Citation (20th edition).</h><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>SUBMISSION PROCEDURE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>1) Authors are requested to send their original, unpublished submissions in .doc/.docx format to upeslawreview@ddn.upes.ac.in</h><br />
                                    <h>2) The name of the file must contain Name of the Author(s) + Title of the Submission.</h><br />
                                    <h>3) The submissions must be accompanied by a covering letter bearing the following information:</h><br />
                                    <h>a) Full Name of the Author(s)</h><br />
                                    <h>b) Position /Designation</h><br />
                                    <h>c) Institutional Affiliations (if any)</h><br />
                                    <h>d) Contact Details of the Author(s)</h><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>PUBLICATION POLICY</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h>1) The submissions should be original work of the authors and must not be published
                                        elsewhere. Submissions with plagiarized content and copyright issues will be rejected
                                        out- rightly.</h><br />
                                    <h>2) By sending the submissions to UPES Law Review, the author(s) agree to assign exclusive
                                        copyright in the work to UPES Law Review It shall be entitled to, without limitation,
                                        publish and reproduce the submission (or part(s) thereof) in any manner it sees fit (with
                                        due acknowledgement to the author) subject to the doctrine of fair use as enumerated
                                        under the Copyright Act.</h><br />
                                    <h>3) The editors reserve the right to edit the submissions (or part(s) thereof) for publication
                                        without permission from or further notice to the author.</h><br />
                                    <h>4) After initial screening, short-listed submissions will go through a double blind peer
                                        review process and the final selection will be based on that procedure.</h><br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </Grid>
            </Grid>

            <Footer />

        </>
    );
}

export default withRouter(CallForPaper);