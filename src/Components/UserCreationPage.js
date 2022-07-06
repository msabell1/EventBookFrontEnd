import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserCreationPage = () => {

    return (
        <div>
            <header className='header'>
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
            </header>
            <div>
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
                        Email:
                        <input type='email' placeholder='email@email.com' />
                    </label>
                    <br /><br />
                    <label>
                        Phone Number:
                        <input type='tel' placeholder='555-555-5555' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' />
                    </label>
                    <br /><br />
                    <label>
                        User Photo:
                        <input type='file' name='userPhoto' id='user-photo' />
                    </label>
                    <br /><br />
                    <label>
                        <textarea placeholder='About Yourself' rows='8' cols='50' />
                    </label>
                    <br /><br />
                    <Link to='/dashboard'>
                        <button id='sign-in-button' type='submit' value='Get Started' >Get Started</button>
                    </Link>
                </form>
            </div>
        </div>
    )

}

export default UserCreationPage;