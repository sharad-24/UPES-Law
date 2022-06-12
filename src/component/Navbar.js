import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../component/index.css'
import logo from '../images/logo.png'


function Navbar() {

    const [isVisible, setIsVisible] = useState(false);
    const [logo11, setLogo11] = useState(true);
    const [logo22, setLogo22] = useState(false);

    const handleVisible1 = () => {
        setLogo11(false);
        setLogo22(true);
        setIsVisible(true);

    }
    const handleVisible2 = () => {
        setLogo22(false);
        setLogo11(true);
        setIsVisible(false);

    }
    return (
        <>
            <div className="bg-nav hidden md:block">
                <div className="p-5 flex justify-evenly text-white">
                    <a href="/"><h className="hover:font-bold">Home</h></a>
                    <a href="/about"><h className="hover:font-bold">About Us</h></a>
                    <a href="/"><h className="hover:font-bold">Archives</h></a>
                    <img style={{ width: '10%' }} src={logo} alt="logo" />
                    <a href="/callForPaper"><h className="hover:font-bold">Submissions</h></a>
                    <a href="/editors"><h className="hover:font-bold">Board Of Editiors</h></a>
                    <a href="/"><h className="hover:font-bold">Blog</h></a>
                </div>
            </div>

            <div className="bg-nav block md:hidden">
                <div className="p-5 flex justify-between text-white">
                    <img style={{ width: '20%' }} src={logo} alt="logo" />
                    {logo11 && (<MenuIcon onClick={handleVisible1} />)}
                    {logo22 && (<CloseIcon onClick={handleVisible2} />)}
                </div>
                {isVisible && (
                    <div className="bg-nav">
                        <div className="p-5 text-white text-right">
                            <a href="/"><h className="hover:font-bold">Home</h></a><br />
                            <a href="/about"><h className="hover:font-bold">About Us</h></a><br />
                            <a href="/"><h className="hover:font-bold">Archives</h></a><br />
                            <a href="/callForPaper"><h className="hover:font-bold">Submissions</h></a><br />
                            <a href="/editors"><h className="hover:font-bold">Board Of Editiors</h></a><br />
                            <a href="/"><h className="hover:font-bold">Blog</h></a><br />
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default withRouter(Navbar);