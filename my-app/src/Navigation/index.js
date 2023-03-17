import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <ul className={"nav nav-pills my-4"}>
            <li className={"nav-item"}><Link className={"nav-link active"} to={"/"}>Home</Link> </li>

            <li className={"nav-item"}><Link className={"nav-link"} to={"/details"}>Details</Link> </li>
            <li className={"nav-item"}><Link className={"nav-link"} to={"/login"}>Login</Link> </li>
            <li className={"nav-item"}><Link className={"nav-link"} to={"/profile"}>Profile</Link> </li>
            <li className={"nav-item"}><Link className={"nav-link"} to={"/search"}>Search</Link> </li>

        </ul>
    )
}
export default Navigation