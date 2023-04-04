import React, {useState} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service"
import {useNavigate, useNavigation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerThunk} from "../Thunks/user-thunks";
// using code from: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/
// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
const RegisterPage = () => {

    const [user, setUser] = useState({
        username: "username1",
        password: "password1",
        role: "normal",
        pfp: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
    })

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const register = async () => {

        const checkBox = document.getElementById("admin-check");

        // await userService.register(user);
        dispatch(registerThunk({
            ...user,
             role: checkBox.checked ? "admin" : "normal"
        }))
        navigate("/profile")
    }

    return (
        <>
            <Navigation/>
            <h1>Register</h1>
            <div className={"row"}>
                <span className={"col-4 border rounded border-primary"}>
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
                    <div>
                        <label htmlFor={"admin-check"}>Admin</label>
                        <input className={"d-block"} id={"admin-check"}
                               type={"checkbox"}/>
                    </div>

                    <button className={"btn btn-primary my-2 w"} onClick={register}>Register</button>
                </span>
                <h1>{user.role}</h1>

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
export default RegisterPage