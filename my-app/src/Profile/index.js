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
                return <h1>Following info</h1>;
            case "followers":
                return <h1>Followers info</h1>;
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


    }, [profile._id, profileId,]);


    useEffect(() => {
        if (profileId && currentUser) {
            checkIfFollowing()

        }
    }, [currentUser, profileId])

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

                {currentUser !== null && (currentUser._id !== profile._id) &&
                    (<div className={"my-3"}>
                            <button className={"btn btn-secondary"} onClick={() =>
                                handleFollowButton()}>{isFollowing ? "Unfollow" : "Follow"} <i
                                className={isFollowing ? "fa fa-user-minus" : "fa fa-user-plus"}/></button>
                        </div>
                    )
                }

                {currentUser !== null && (currentUser._id === profile._id || currentUser.role === "admin") &&
                    (<div>
                            <button className={"btn btn-primary"} onClick={() =>
                                handleEditButton()}>{isEditing ? "Save" : "Edit"} <i className={"fa fa-pencil"}/>
                            </button>
                        </div>
                    )
                }
                {currentUser !== null && (currentUser._id === profile._id) &&
                    (
                        <div className={"pt-2"}>
                            <button className={"btn btn-danger"} onClick={logout}>Log out <i
                                className={"fa fa-sign-out"}/></button>
                        </div>
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
                    <li className="nav-item">
                        <Link className={`nav-link ${userInfo === "likes" && "active"}`}
                              to={`/profile/${profile._id}/likes`}>See Liked Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${userInfo === "comments" && "active"}`}
                              to={`/profile/${profile._id}/comments`}>See Comments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${userInfo === "following" && "active"}`}
                              to={`/profile/${profile._id}/following`}>See Following</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${userInfo === "followers" && "active"}`}
                              to={`/profile/${profile._id}/followers`}>See Followers</Link>
                    </li>
                </ul>


                {/*CODE BASED ON: https://stackoverflow.com/a/46593006*/}
                {
                    showDetails(userInfo)
                }

                {/*<h2>Followers</h2>*/}
                {/*<div className={"border border-primary rounded"}>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}
                {/*</div>*/}

                {/*<h2>Following</h2>*/}
                {/*<div className={"border border-primary rounded"}>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}
                {/*    <img*/}
                {/*        src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"}*/}
                {/*        className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>*/}

                {/*</div>*/}

                {/*<ul className={"list-group"}>*/}
                {/*    {*/}
                {/*        // CODE FROM: https://mdbootstrap.com/docs/standard/extended/horizontal-list/*/}
                {/*        <ul className={"list-group list-group-horizontal position-relative overflow-auto"}>*/}
                {/*            {*/}
                {/*                userLikes && userLikes.map(game =>*/}
                {/*                    <Link to={`/details/${game.gameId}`}><GameCard gameId={game.gameId}/></Link>*/}
                {/*                )*/}

                {/*            }*/}
                {/*        </ul>*/}
                {/*    }*/}
                {/*</ul>*/}

                {/*{*/}
                {/*    <ul className={"list-group"}>*/}
                {/*        {userComments && (*/}
                {/*            userComments && userComments.map(post =>*/}
                {/*                <div>On <Link to={`/details/${post.gameId}`}>{post.gameName}</Link><CommentItem*/}
                {/*                    key={post._id} post={post}/>*/}
                {/*                    <hr></hr>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        )*/}

                {/*        }*/}
                {/*    </ul>*/}
                {/*}*/}
            </div>}


        </>
    )
}


export default ProfilePage