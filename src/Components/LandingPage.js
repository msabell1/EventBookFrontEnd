import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

const LandingPage = () => {

    return (
        <div>
            <header className="header">
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
                <Link to="/login">
                    <p class='login-link'>Log in/Sign up</p>
                </Link>
            </header>
            <div>
                <p>
                    Have you every been at a party or event
                    and wanted to share all the photos you
                    took with everyone there? EventBook is for you!
                </p>
                <img src="#" className="landing-image" alt="party" />
            </div>
            <div id="landing-page">

            </div>
        </div>
    )

}

export default LandingPage; 