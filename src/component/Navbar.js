import React from "react";
import { withRouter, Link } from "react-router-dom";

import '../component/index.css'
import logo from '../images/logo.png'


function Navbar() {
    return (
        <div className="bg-nav">
           <div className="p-5 flex justify-evenly text-white">
               <a href="/"><h className="hover:font-bold">Home</h></a>
               <a href="/about"><h className="hover:font-bold">About Us</h></a>
               <a href="/"><h className="hover:font-bold">Archives</h></a>
               <img style={{width: '8%'}} src={logo} alt="logo"/>
               <a href="/callForPaper"><h className="hover:font-bold">Submissions</h></a>
               <a href="/"><h className="hover:font-bold">Contact</h></a>
               <a href="/"><h className="hover:font-bold">Blog</h></a>

           </div>
        </div>
    );
}

export default withRouter(Navbar);