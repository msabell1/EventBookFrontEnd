import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {

    return (
        <div>
            <header className='header'>
                <Link to="/">
                    <p class='title'>EventBook</p>
                </Link>
            </header>
            <div>
                <h3>Sign Up</h3>
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
                    <label>
                        Confirm Password:
                        <input type='password' placeholder='Confirm Password' />
                    </label>
                    <br /><br />
                    <Link to='/createuser'>
                        <button id='sign-in-button' type='submit' value='Sign In' >Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    )

}

export default SignUpPage;