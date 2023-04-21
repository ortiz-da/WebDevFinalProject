import CommentStats from "./comment-stats";
import React, {useEffect, useState} from "react";
import {getGameDetails} from "../Services/game-service";
import {findUserById} from "../Services/user-service";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentThunk} from "../Thunks/comments-thunks";

const CommentItem = ({post}) => {

    const [userInfo, setUserInfo] = useState({});

    const {currentUser} = useSelector(state => state.userData)

    useEffect( () => {

        const getCommentUserInfo = async () => {
            const info = await findUserById(post.userId)
            // console.log(details)
            setUserInfo(info)
        }

        getCommentUserInfo()
    },[])

    const dispatch = useDispatch();
    const deleteCommentHandler = (postId) => {

        dispatch(deleteCommentThunk(postId))
    }


    return (
        <div className="list-group-item p-1">
            <div className="row p-1">
                <div className="col-md-1 col-2 p-1">
                    <Link to={`/profile/${userInfo._id}`}><img className="img-fluid rounded-circle m-2" width="48px" height="48px"
                                     src={userInfo.pfp} alt={""}></img></Link>
                </div>

                <div className="col-md-11 col-10 py-2 px-4">
                    {
                        currentUser && currentUser.role === "admin" && (
                            <i className="fas fa-x float-end" onClick={() => deleteCommentHandler(post._id)}></i>

                        )
                    }
                    <div className="fw-bold">{userInfo.username}
                        <span className="text-secondary fw-normal"> - {post.time}</span>
                    </div>
                    <div className="text-secondary fw-normal">{post.commentText}</div>
                    <div className={"pt-3"}>
                        {/*<CommentStats post={post}></CommentStats>*/}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CommentItem;