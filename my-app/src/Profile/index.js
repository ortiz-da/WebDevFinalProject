import React, {useState, useEffect, useSyncExternalStore} from "react";
import Navigation from "../Navigation";
import * as userService from "../Services/user-service.js";
import * as gameService from "../Services/game-service.js";
import * as followService from "../Services/follow-service"


import {useDispatch, useSelector} from "react-redux";
import {findLikesByUserIdThunk, logoutThunk, profileThunk, updateUserThunk} from "../Thunks/user-thunks";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {findCommentsByUserId} from "../Services/comments-service";
import {findCommentsByUserIdThunk} from "../Thunks/comments-thunks";
import CommentsList from "../Comments/comments-list";
import CommentItem from "../Comments/comment-item";
import GameCard from "./game-card";
import UserLikesList from "./user-likes-list";
import UserCommentsList from "./user-comments-list";
import FollowersList from "./followers-list";
import FollowingList from "./following-list";

// USING CODE FROM: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/blob/project/src/profile.js

const ProfilePage = () => {

    const {profileId} = useParams();

    const {userInfo} = useParams();

    const {currentUser} = useSelector(state => state.userData)
    const [profile, setProfile] = useState({})

    const [isEditing, setIsEditing] = useState(false);

    const [isFollowing, setIsFollowing] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async () => {
        // await userService.logout();
        await dispatch(logoutThunk());
        navigate("/login");
    };

    const getProfile = async () => {
        console.log("GETTING PROFILE ON FRONT END")
        const action = await dispatch(profileThunk());
        setProfile(action.payload);
    };

    const getUserById = async () => {
        const user = await userService.findUserById(profileId);
        setProfile(user);
    };

    const checkIfFollowing = async () => {
        const followers = await followService.getFollowers(profileId)
        for (let i = 0; i < followers.length; i++) {
            if (followers[i].follower === currentUser._id) {
                setIsFollowing(true)
                break
            }
        }
    }

    const handleEditButton = async () => {
        if (isEditing) {
            await dispatch(updateUserThunk(profile))
        }
        setIsEditing(!isEditing)
    };

    const handleFollowButton = async () => {
        const follow = {
            "follower": currentUser._id,
            "following": profile._id
        }

        if (isFollowing) {
            const result = await followService.unFollowUser(follow)
        } else {
            const result = await followService.followUser(follow)
        }
        setIsFollowing(!isFollowing)
    };

    {/*CODE BASED ON: https://stackoverflow.com/a/46593006*/
    }

    const showDetails = (info) => {
        switch (info) {
            case "likes":
                return <UserLikesList userId={profile._id}/>;
            case "comments":
                return <UserCommentsList userId={profile._id}/>;
            case "following":
                return <FollowingList userId={profile._id}/>
            case "followers":
                return <FollowersList userId={profile._id}/>;
            default:
                return <div></div>
        }
    }

    useEffect(() => {


        // when page loads
        // 1 get the user profile (either the currently logged in if no params are provided, or the user that corresponds to the id in the url
        if (profileId) {
            getUserById()
            // .then(fetchComments(profileId));

        } else {
            getProfile()
        }


    }, [profileId,]);


    useEffect(() => {
        if (profileId && currentUser) {
            checkIfFollowing()

        }
    }, [currentUser, profileId])

    const date = new Date(profile.createdOn)

    return ((currentUser || profileId) &&
        <>
            <Navigation/>

            {profile && <div>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <img src={profile.pfp} className={"img-thumbnail rounded-circle"} width={200} height={200}/>

                    </div>
                    <div className={"col-9"}>
                        <div></div>
                        <label htmlFor={"username"}><h2>Username:</h2></label>

                        {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") && isEditing ? (
                                <input
                                    id={"username"}
                                    type="text"
                                    className="form-control mx-2"
                                    value={profile.username}
                                    onChange={(e) =>
                                        setProfile({...profile, username: e.target.value})
                                    }
                                />
                            ) :
                            <h5 className={"mx-2"}>{profile.username}</h5>
                        }


                        <h2>Joined on:</h2>
                        <h5 className={"mx-2"}>{
                            date.toLocaleDateString()
                        }</h5>

                        {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") &&
                            <div>
                                <label htmlFor={"email"}><h2>Email:</h2></label>
                                {isEditing ? <input id={"email"}
                                                    type="text"
                                                    className="form-control mx-2"
                                                    value={profile.email}
                                                    onChange={(e) =>
                                                        setProfile({...profile, email: e.target.value})
                                                    }
                                    />
                                    :
                                    <h5 className={"mx-2"}>{profile.email}</h5>
                                }
                            </div>
                        }

                    </div>
                </div>

                {currentUser !== null && (currentUser._id !== profile._id) &&
                    (<div className={"my-3"}>
                            <button className={"btn btn-secondary"} onClick={() =>
                                handleFollowButton()}>{isFollowing ? "Unfollow" : "Follow"} <i
                                className={isFollowing ? "fa fa-user-minus" : "fa fa-user-plus"}/></button>
                        </div>
                    )
                }

                {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") &&
                    (<span>
                            <button className={"btn btn-primary"} onClick={() =>
                                handleEditButton()}>{isEditing ? "Save" : "Edit"} <i className={"fa fa-pencil"}/>
                            </button>
                        </span>
                    )
                }
                {currentUser !== null && (currentUser._id === profile._id) &&
                    (
                        <span className={"ps-2"}>
                            <button className={"btn btn-danger"} onClick={logout}>Log out <i
                                className={"fa fa-sign-out"}/></button>
                        </span>
                    )
                }

                <hr/>

                {
                    currentUser !== null && currentUser._id === profile._id && (
                        <div className={"btn btn-secondary"} onClick={() => navigate("/stats")}>My Stats <i
                            className={"fa fa-bar-chart"}/></div>
                    )
                }


                {/*Code from: https://getbootstrap.com/docs/5.0/components/navs-tabs/*/}

                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item mx-1">
                        <Link className={`nav-link ${(userInfo === "likes") && "active"}`}
                              to={profileId ? `/profile/${profile._id}/about/likes` : `/profile/about/likes`}><i
                            className="fa-solid fa-heart"></i> See Liked
                            Games</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link className={`nav-link ${userInfo === "comments" && "active"}`}
                              to={profileId ? `/profile/${profile._id}/about/comments` : `/profile/about/comments`}><i
                            className="fa-solid fa-comment"></i> See
                            Comments</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link className={`nav-link ${userInfo === "following" && "active"}`}
                              to={profileId ? `/profile/${profile._id}/about/following` : `/profile/about/following`}><i
                            className="fa-solid fa-users"></i> See
                            Following</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link className={`nav-link ${userInfo === "followers" && "active"}`}
                              to={profileId ? `/profile/${profile._id}/about/followers` : `/profile/about/followers`}><i
                            className="fa-solid fa-people-group"></i> See
                            Followers</Link>
                    </li>
                </ul>


                {/*CODE BASED ON: https://stackoverflow.com/a/46593006*/}
                {
                    showDetails(userInfo)
                }
            </div>}


        </>
    )
}


export default ProfilePage