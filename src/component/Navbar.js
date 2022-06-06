import React from "react";
import { withRouter } from "react-router-dom";

import '../component/index.css'


function Navbar() {
    return (
        <div className="bg-nav">
           <div className="p-5 flex justify-evenly text-white">
               <h className="hover:font-bold">Home</h>
               <h className="hover:font-bold">About Us</h>
               <h className="hover:font-bold">Archives</h>
               <h className="hover:font-bold">Submissions</h>
               <h className="hover:font-bold">Contact</h>
               <h className="hover:font-bold">Blog</h>

           </div>
        </div>
    );
}

export default withRouter(Navbar);