import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EentCreationPage = () => {

    const [qrImage, setQRImage] = useState('')

    const handleEventsubmit = (event) => {

    }

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
                <form onSubmit={handleEventsubmit}>
                    <label>
                        Event Title:
                        <input type='text' placeholder='Event Title' />
                    </label>
                    <br /><br />
                    <label>
                        Event Date:
                        <input type='date' />
                    </label>
                    <br /><br />
                    <label>
                        <textarea placeholder='Event Desctiption' rows='8' cols='50' />
                    </label>
                    <br /><br />
                    <Link to='/dashboard'>
                        <button id='create-event-button' type='submit' value='Create Event' >Create Event</button>
                    </Link>
                </form>
            </div>
        </div>
    )

}

export default EentCreationPage;