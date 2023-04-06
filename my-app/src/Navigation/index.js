import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getGameDetails} from "../Services/game-service";

// https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
// https://getbootstrap.com/docs/4.0/components/navbar/
const Navigation = () => {
    const pathName = useLocation().pathname;

    const userData = useSelector(state => state.userData)

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <h1>{JSON.stringify(userData.currentUser)}</h1>
            <nav className={"navbar-dark py-3"}>
                {loggedIn ?
                    <Link className={"nav-link"} to={"/profile"}>
                        <img src={userData.currentUser.pfp} className={"img-thumbnail rounded-circle float-end"} width={55}
                             height={55}/>
                    </Link>
                    :
                    <Link className={"nav-link"} to={"/login"}>
                        <div src={userData.currentUser.pfp} className={" rounded-circle float-end"} width={55}
                             height={55}>LOGIN
                        </div>
                    </Link>
                }
                {/*<Link className={"nav-link"} to={"/profile"}>*/}
                {/*    <img*/}
                {/*        src={userData ? "https://i1.sndcdn.com/avatars-HJxyKlpKxjj2upYS-quuw8g-t500x500.jpg" : userData.currentUser.pfp}*/}
                {/*        className={"img-thumbnail rounded-circle float-end"} width={55}*/}
                {/*        height={55}/>*/}
                {/*</Link>*/}


                <ul className={"nav nav-pills "}>
                    {/*REFERECE: https://www.pluralsight.com/guides/applying-classes-conditionally-react*/}
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/" ? "active" : ""}`}
                                                     to={"/"}>Home</Link></li>
                    {/*<li className={"nav-item"}><Link className={`nav-link ${pathName === "/details" ? "active" : ""}`}*/}
                    {/*                                 to={"/details"}>Details</Link></li>*/}
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/login" ? "active" : ""}`}
                                                     to={"/login"}>Login</Link></li>
                    <li className={"nav-item"}><Link className={`nav-link ${pathName === "/profile" ? "active" : ""}`}
                                                     to={"/profile"}>Profile</Link></li>
                    <li className={"nav-item"}><Link
                        className={`nav-link ${(pathName.includes("/search") || pathName.includes("/results") || pathName.includes("/details")) ? "active" : ""}`}
                        to={"/search"}>Search</Link></li>
                </ul>
            </nav>
        </div>

    )
}
export default Navigation