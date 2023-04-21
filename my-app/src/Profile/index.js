import React, {useState, useEffect, useSyncExternalStore} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service";

import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk, updateUserThunk} from "../Thunks/user-thunks";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findCommentsByUserId} from "../Services/comments-service";
import {findCommentsByUserIdThunk} from "../Thunks/comments-thunks";
import CommentsList from "../Comments/comments-list";
import CommentItem from "../Comments/comment-item";

// USING CODE FROM: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/blob/project/src/profile.js

const ProfilePage = () => {

    const {profileId} = useParams();
    const {currentUser} = useSelector(state => state.userData)
    const [profile, setProfile] = useState({})

    const [isEditing, setIsEditing] = useState(false);

    const [userComments, setUserComments] = useState([]);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async () => {
        // await userService.logout();
        await dispatch(logoutThunk());
        navigate("/login");
    };

    const getProfile = async () => {
        // const profile = await userService.profile();
        console.log("GETTING PROFILE ON FRONT END")
        const action = await dispatch(profileThunk());
        setProfile(action.payload);
    };

    const getLikes = async () => {
        // console.log("GETTING LIKES")
        // const action = await dispatch()
    }

    const fetchComments = async (userId) => {
        console.log(`GETTING COMMENTS FOR PROFILE ${userId}`)
        const comments = await dispatch(findCommentsByUserIdThunk(userId))
        // console.log(`__________________${comments}`)
        setUserComments(comments.payload)
    }

    const getUserById = async () => {
        const user = await userService.findUserById(profileId);
        setProfile(user);
    };

    const handleEditButton = async () => {
        if (isEditing) {
            await dispatch(updateUserThunk(profile))
        }
        setIsEditing(!isEditing)
    };

    useEffect(() => {
        if (profileId) {
            getUserById();
            fetchComments(profileId)
        } else {
            getProfile();
            fetchComments(currentUser._id)

        }


    }, [profileId]);

    return (
        <>
            <Navigation/>

            {profile && <div>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <img src={profile.pfp} className={"img-thumbnail rounded-circle"} width={200} height={200}/>

                    </div>
                    <div className={"col-9"}>
                        <div></div>
                        <h2>Username:</h2>

                        {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") && isEditing ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profile.username}
                                    onChange={(e) =>
                                        setProfile({...profile, username: e.target.value})
                                    }
                                />
                            ) :
                            <h5>{profile.username}</h5>
                        }


                        <h2>Joined on:</h2>
                        <h5>{profile.createdOn}</h5>

                        {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") &&
                            <div>
                                <h2>Email:</h2>
                                {isEditing ? <input
                                        type="text"
                                        className="form-control"
                                        value={profile.email}
                                        onChange={(e) =>
                                            setProfile({...profile, email: e.target.value})
                                        }
                                    />
                                    :
                                    <h5>{profile.email}</h5>
                                }
                            </div>
                        }

                    </div>
                </div>

                {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") &&
                    (<div>
                            <button className={"btn btn-primary"} onClick={() =>
                                handleEditButton()}>{isEditing ? "Save" : "Edit"}</button>

                            <div className={"pt-2"}>
                                <button className={"btn btn-danger"} onClick={logout}>Logout</button>
                            </div>
                            <hr/>
                        </div>
                    )
                }


                <h2>Followers</h2>
                <div className={"border border-primary rounded"}>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                </div>

                <h2>Following</h2>
                <div className={"border border-primary rounded"}>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                    <img
                        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}
                        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>

                </div>

                <h2>Liked Games</h2>
                <ul className={"list-group"}>
                    <li className={"list-group-item"}>Test</li>
                    <li className={"list-group-item"}>Test</li>
                    <li className={"list-group-item"}>Test</li>
                    <li className={"list-group-item"}>Test</li>
                    <li className={"list-group-item"}>Test</li>
                </ul>

                <h2>Comments Made</h2>
                {
                    <ul className={"list-group"}>
                        { userComments && (
                            userComments && userComments.map(post =>
                                <div>On <Link to={`/details/${post.gameId}`}>{post.gameName}</Link><CommentItem key={post._id} post={post}/> <hr></hr></div>

                            )
                        )

                        }
                    </ul>
                }
            </div>}


        </>
    )
}


export default ProfilePage