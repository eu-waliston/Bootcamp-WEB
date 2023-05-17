import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <h1 className="login--greats">Hello.</h1>
            <form className="form">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;