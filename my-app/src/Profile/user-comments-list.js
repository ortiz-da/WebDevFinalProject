import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";
import {findCommentsByUserId} from "../Services/comments-service";
import CommentItem from "../Comments/comment-item";
import Button from "bootstrap/js/src/button";
import {deleteCommentThunk} from "../Thunks/comments-thunks";

const UserCommentsList = ({userId}) => {

    const [userComments, setUserComments] = useState();

    const {currentUser} = useSelector(state => state.userData)


    const fetchComments = async () => {
        console.log(`GETTING COMMENTS FOR PROFILE ${userId}`)
        const comments = await findCommentsByUserId(userId)
        setUserComments(comments)
    }


    useEffect(() => {
        fetchComments()
    }, [userId])


    const dispatch = useDispatch();
    const deleteCommentHandler = async (postId) => {

        await dispatch(deleteCommentThunk(postId))
        // this isn't great but oh well
        fetchComments()
    }

    return (
        <div>
            <ul className={"list-group"}>
                {
                    userComments && userComments.map(post =>

                        <div key={post._id} className={"list-group-item position-relative"}>

                            On <Link to={`/details/${post.gameId}`}>{post.gameName}</Link>:


                            <CommentItem post={post}/>
                            {
                                currentUser && (currentUser.role === "admin" || currentUser._id === userId) && (
                                    <div className={"btn btn-danger position-absolute top-0 end-0 m-2"}
                                         onClick={() => {
                                             deleteCommentHandler(post._id)
                                         }}>X
                                    </div>
                                )
                            }


                        </div>
                    )
                }
            </ul>
        </div>


    )
}

export default UserCommentsList;