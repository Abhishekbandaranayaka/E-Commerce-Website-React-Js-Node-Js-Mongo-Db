import React, { useState } from "react";
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                {showLogin ? (
                    // Render the login form
                    <div>
                        <h1>Login</h1>
                        <div className="loginsignup-fields">
                            <input type="email" placeholder="Email Address" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button>Login</button>
                        <p className="loginsignup-login">
                            Don't have an account?<span onClick={toggleLogin}>Sign Up</span>
                        </p>
                    </div>
                ) : (
                    // Render the sign-up form
                    <div>
                        <h1>Sign Up</h1>
                        <div className="loginsignup-fields">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button>Continue</button>
                        <p className="loginsignup-login">
                            Already have an account?<span onClick={toggleLogin}>Login Here</span>
                        </p>
                        <div className="loginsignup-agree">
                            <input type="checkbox" name="" id="" />
                            <p>By Counting, I agree to the terms of use & privacy policy</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginSignup;
