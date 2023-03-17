import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <div className={"row my-4"}>
            <div className={"col-6"}>
                <ul className={"nav nav-pills "}>
                    <li className={"nav-item"}><Link className={"nav-link active"} to={"/"}>Home</Link> </li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/details"}>Details</Link> </li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/login"}>Login</Link> </li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/profile"}>Profile</Link> </li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/search"}>Search</Link> </li>
                </ul>
            </div>

            <div className={"col-6"}>
                <Link className={"nav-link"} to={"/profile"}><img src={"https://www.georgiaaquarium.org/wp-content/uploads/2018/09/beluga-whale-webcam-9.jpg"} className={"img-thumbnail rounded-circle float-end"} width={55} height={55}/></Link>
            </div>
        </div>

    )
}
export default Navigation