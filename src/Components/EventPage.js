import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventPage = () => {

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
                    <p>Event Title</p>
                    <p>Event Date</p>
                    <p>Event Description</p>
                </div>
                <div>
                    <ul>
                        <li>List all images and messages from the event</li>
                    </ul>
                </div>
            </div>

        </div>
    )

}

export default EventPage;