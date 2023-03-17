import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return(
        <>
            <Navigation/>
            <h1>Login Page</h1>
            <div className={"row"}>
                <span className={"col-4 border rounded border-primary"}>
                    <div className={"my-2"}><input type={"text"} placeholder={"Username"}></input></div>
                    <div className={"my-2"}><input type={"text"} placeholder={"Password"}></input></div>
                    <button className={"btn btn-primary my-2"}>Login</button>
                </span>
                <p>
                    Don't have an account? Create one HERE.
                </p>
                {/*<span className={"col-3 border rounded mx-3"}>*/}
                {/*    <p>Password must contain at least:</p>*/}
                {/*    <div>12 characters</div>*/}
                {/*    <div>1 letter</div>*/}
                {/*    <div>1 number</div>*/}
                {/*    <div>1 special character</div>*/}
                {/*</span>*/}
            </div>




        </>
    )
}
export default LoginPage