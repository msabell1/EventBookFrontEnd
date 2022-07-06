import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QRCodeLogIn = (props) => {
    return (
        <div>
            <p>Welcome to ____'s event!</p>
            <form>
                <label>
                    First Name:
                    <input type='usertextname' placeholder='First Name' />
                </label>
                <br /><br />
                <label>
                    Last Name:
                    <input type='text' placeholder='Last Name' />
                </label>
                <br /><br />
                <label>
                    Phone Number:
                    <input type='tel' placeholder='555-555-5555' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' />
                </label>
                <br /><br />
                <Link to='/event'>
                        <button id='sign-in-button' type='submit' value='Join Event' >Join Event</button>
                    </Link>
            </form>
        </div>
    )
}

export default QRCodeLogIn;