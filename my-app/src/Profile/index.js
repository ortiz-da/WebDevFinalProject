import React, {useState, useEffect} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service";

import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../Thunks/user-thunks";
import {useNavigate, useParams} from "react-router-dom";

// USING CODE FROM: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/blob/project/src/profile.js

const ProfilePage = () => {

    const {profileId} = useParams();
    const currentUser = useSelector(state => state.userData)
    const [profile, setProfile] = useState({})


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async () => {
        // await userService.logout();
        await dispatch(logoutThunk());
        navigate("/login");
    };

    const getProfile = async () => {
        // const profile = await userService.profile();
        const action = await dispatch(profileThunk());
        setProfile(action.payload);
    };


    const getUserById = async () => {
        const user = await userService.findUserById(profileId);
        setProfile(user);
    };

    useEffect(() => {
        if (profileId) {
            getUserById();
        } else {
            getProfile();
        }
        // getProfile();

    }, [profileId]);

    return(
        <>
            <Navigation/>
            <h1>ProfilePage{profileId}</h1>
            {profile &&             <div>
                <div className={"row"}>
                    <div className={"col-3"}>
                        {currentUser && (
                                <img src={profile.pfp} className={"img-thumbnail rounded-circle"} width={200} height={200}/>
                            )}

                    </div>
                    <div className={"col-9"}>
                        <div></div>
                        <h2>Username:</h2>
                        {currentUser && (
                            <input
                                type="text"
                                className="form-control"
                                value={profile.username}
                                onChange={(e) =>
                                    setProfile({ ...profile, username: e.target.value })
                                }
                            />
                        )}
                        {!currentUser && <p>{profile.username}</p>}

                        <h2>Joined on:</h2><h3>
                        {profile.createdOn}</h3>

                    </div>
                </div>
                <button className={"btn btn-primary"}>Edit</button>
                <div className={"pt-2"}><button className={"btn btn-danger"} onClick={logout}>Logout</button></div>
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
            </div>}





        </>
    )
}


export default ProfilePage