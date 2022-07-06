import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QRCodePage = (props) => {

    return (
        <div>
            <header className='header'>
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
                <Link to="/dashboard">
                    <p class='title'>Dashboard</p>
                </Link>
            </header>
            <div>
                <div>
                    <img src='#' />
                </div>
                <div>
                    <h2>Share this QR Code with your guests for your event</h2>
                    <button id="qr-download">Download QR Code</button>
                </div>
            </div>

        </div>
    )

}

export default QRCodePage;