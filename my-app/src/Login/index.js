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

    const [failed, setFailed] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //USING CODE FROM: https://stackoverflow.com/questions/64517547/redux-thunk-caller-get-response
    const login = async () => {
        const result = await dispatch(loginThunk(user))

        try {
            const payload = unwrapResult(result)
            navigate("/profile")
        } catch (e) {
            setFailed(true)
            console.log(e)
        }
    }

    return (
        <>
            <Navigation/>
            <h1>Login</h1>

            <div className={"border rounded border-primary m-1 p-1 col-7 col-sm-7 col-md-6 col-lg-4 col-xl-3"}>

                <label htmlFor={"username"}>Username</label>
                <div id={"username"} className={"my-2"}><input type={"text"} placeholder={"Username"}
                                                               value={user.username}
                                                               onChange={(e) => setUser({
                                                                   ...user,
                                                                   username: e.target.value
                                                               })}
                ></input></div>
                <label htmlFor={"password"}>Password</label>
                <div id={"password"} className={"my-2"}><input type={"password"} placeholder={"Password"}
                                                               value={user.password}

                                                               onChange={(e) => setUser({
                                                                   ...user,
                                                                   password: e.target.value
                                                               })}></input></div>
                <button className={"btn btn-primary my-2"} onClick={login}>Login</button>
            </div>

            <p className={"my-3"}>
                Don't have an account? Create one <Link to={"/register"}>HERE</Link>.
            </p>

            {failed ?

                <p className={"text-danger"}>Login failed. Please try again.</p>
                : null
            }


        </>
    )
}
export default LoginPage