import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventCreationPage = (props) => {
    
    const [qrImage, setQRImage] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [newEvent, setNewEvent] = useState({})

    const handleEventsubmit = (event) => {
        // create qr code image

        // create and post new event




    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
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
                        <input
                            type='text'
                            placeholder='Event Title'
                            onChange={handleTitle}
                        />
                    </label>
                    <br /><br />
                    <label>
                        Event Date:
                        <input
                            type='date'
                            onChange={handleDate}
                        />
                    </label>
                    <br /><br />
                    <label>
                        <textarea
                            placeholder='Event Desctiption'
                            rows='8'
                            cols='50'
                            onChange={handleDescription}
                        />
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

export default EventCreationPage;