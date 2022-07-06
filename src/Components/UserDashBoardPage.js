import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserDashBoardPage = () => {
    let events = [];

    // Query the db for events the current user is tied to
    
    return (
        <div>
            <header className='header'>
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
                <Link to='/createevent'>New Event</Link>
            </header>
            <div>
                <p>All your events:</p>
                <ul>
                    {/* List all events the user is associated with */}
                </ul>
            </div>
        </div>
    )

}

export default UserDashBoardPage;