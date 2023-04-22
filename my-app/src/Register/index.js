import React, {useState} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service"
import {useNavigate, useNavigation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginThunk, registerThunk} from "../Thunks/user-thunks";
import {unwrapResult} from "@reduxjs/toolkit";
// using code from: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/
// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
const RegisterPage = () => {

    const [user, setUser] = useState({
        email: "test@gmail.com",
        username: "username1",
        password: "password1",
        role: "normal",
        pfp: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
    })

    const dispatch = useDispatch();


    const navigate = useNavigate();

    //USING CODE FROM: https://stackoverflow.com/questions/64517547/redux-thunk-caller-get-response
    const register = async () => {
        const result = await dispatch(registerThunk(user))

        console.log(user)
        try {
            const payload = unwrapResult(result)
            navigate("/profile")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Navigation/>
            <h1>Register</h1>
            <div className={"border rounded border-primary m-1 p-1 col-7 col-sm-7 col-md-6 col-lg-4 col-xl-3"}>

                                        <label htmlFor={"email"}>Email</label>
                    <div id="email" className={"my-2"}><input type={"text"} placeholder={"Email"}
                                                              value={user.email}
                                                              onChange={(e) => setUser({
                                                                  ...user,
                                                                  email: e.target.value
                                                              })}
                    ></input></div>

                    <label htmlFor={"username"}>Username</label>
                    <div id="username" className={"my-2"}><input type={"text"} placeholder={"Username"}
                                                                 value={user.username}
                                                                 onChange={(e) => setUser({
                                                                     ...user,
                                                                     username: e.target.value
                                                                 })}
                    ></input></div>

                    <label htmlFor={"password"}>Password</label>
                    <div id="password" className={"my-2"}><input type={"text"} placeholder={"Password"}
                                                                 value={user.password}

                                                                 onChange={(e) => setUser({
                                                                     ...user,
                                                                     password: e.target.value
                                                                 })}></input></div>

                    <label htmlFor={"pfp"}>Profile Picture URL</label>
                    <div id="pfp" className={"my-2"}><input type={"text"} placeholder={"Profile Picture URL"}
                                                            value={user.pfp}

                                                            onChange={(e) => setUser({
                                                                ...user,
                                                                pfp: e.target.value
                                                            })}></input></div>
                    <div>
                        <label htmlFor={"admin-check"}>Admin</label>
                        <input className={"d-block"} id={"admin-check"}
                               type={"checkbox"}
                               onChange={(e) => setUser({
                                   ...user,
                                   role: e.target.checked ? "admin" : "normal"
                               })}/>
                    </div>

                    <button className={"btn btn-primary my-2 w"} onClick={register}>Register</button>
                </div>


        </>
    )
}
export default RegisterPage