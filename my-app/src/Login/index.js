import React, {useState} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service"
import {useNavigate, useNavigation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginThunk} from "../Thunks/user-thunks";
import {unwrapResult} from "@reduxjs/toolkit";
// using code from: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/

const LoginPage = () => {

    const [user, setUser] = useState({
        username: "username1",
        password: "password1",
        role: "normal"
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //USING CODE FROM: https://stackoverflow.com/questions/64517547/redux-thunk-caller-get-response
    const login = async () => {
        const result = await dispatch(loginThunk(user))

        try {
            const payload = unwrapResult(result)
            navigate("/profile")
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navigation/>
            <h1>Login Page</h1>
            <div className={"row"}>
                <span className={"col-4 border rounded border-primary"}>
                    <div className={"my-2"}><input type={"text"} placeholder={"Username"}
                                                   value={user.username}
                                                   onChange={(e) => setUser({...user, username: e.target.value})}
                    ></input></div>
                    <div className={"my-2"}><input type={"password"} placeholder={"Password"}
                                                   value={user.password}

                                                   onChange={(e) => setUser({ ...user, password: e.target.value })}></input></div>
                    <button className={"btn btn-primary my-2"} onClick={login}>Login</button>
                </span>
                <p>
                    Don't have an account? Create one <Link to={"/register"}>HERE</Link>.
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