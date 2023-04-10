import React, {useState} from "react";
import Navigation from "../Navigation";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../Thunks/user-thunks";
import {useParams} from "react-router-dom";

const ProfilePage = () => {


    const {username} = useParams();
    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch();

    return(
        <>
            <Navigation/>
            <h1>ProfilePage{username}</h1>
            <div className={"row"}>
                <div className={"col-3"}>
                    <img src={userData.currentUser.pfp} className={"img-thumbnail rounded-circle"} width={200} height={200}/>

                </div>
                <div className={"col-9"}>
                    <div></div>
                    <h2>Username:</h2><h3>{userData.currentUser.username}</h3>
                    <h2>Joined on:</h2><h3>{userData.currentUser.createdOn}</h3>

                </div>
            </div>
            <button className={"btn btn-primary"}>Edit</button>
            <div className={"pt-2"}><button className={"btn btn-primary"}>Logout</button></div>
            <hr/>

            <h2>Followers</h2>
            <div className={"border border-primary rounded"}>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
            </div>

            <h2>Following</h2>
            <div className={"border border-primary rounded"}>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>

            </div>

            <h2>Liked Games</h2>
            <ul className={"list-group"}>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
            </ul>

            <h2>Liked Comments</h2>


            <h2>Comments Made</h2>



        </>
    )
}


export default ProfilePage