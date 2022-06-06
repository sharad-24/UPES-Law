import React from "react";
import { withRouter } from "react-router-dom";


function Home() {
    return (
        <>
           <h className="underline flex justify-center">welcome to UPES-LAW</h>
        </>
    );
}

export default withRouter(Home);