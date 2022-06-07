import React from "react";
import { withRouter, Link } from "react-router-dom";

import '../component/index.css'


function Navbar() {
    return (
        <div className="bg-nav">
           <div className="p-5 flex justify-evenly text-white">
               <Link to="/"><h className="hover:font-bold">Home</h></Link>
               <Link to="/about"><h className="hover:font-bold">About Us</h></Link>
               <Link to="/"><h className="hover:font-bold">Archives</h></Link>
               <Link to="/callForPaper"><h className="hover:font-bold">Submissions</h></Link>
               <Link to="/"><h className="hover:font-bold">Contact</h></Link>
               <Link to="/"><h className="hover:font-bold">Blog</h></Link>

           </div>
        </div>
    );
}

export default withRouter(Navbar);