import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {

    return (
        <div>
            <header className='header'>
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
            </header>
            <div>
                <h3>Sign In</h3>
                <form>
                    <label>
                        User Name:
                        <input type='username' placeholder='User Name' />
                    </label>
                    <br /><br />
                    <label>
                        Password:
                        <input type='password' placeholder='Password' />
                    </label>
                    <br /><br />
                    <Link to='/dashboard'>
                        <button id='sign-in-button' type='submit' value='Sign In'>Sign In</button>
                    </Link>
                </form>
                <br />
                <p>New User</p>
                <Link to='/signup'>
                    <button id='sign-up-button' type='submit' value='Sign Up'>Sign Up</button>
                </Link>
            </div>
        </div>
    )

}

export default LogInPage;