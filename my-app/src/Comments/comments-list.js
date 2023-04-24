import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {deleteCommentThunk, findCommentsByGameIdThunk, findAllCommentsThunk} from "../Thunks/comments-thunks";
import CommentStats from "./comment-stats";
import CommentItem from "./comment-item";
import {findAllComments, findCommentsByGameId} from "../Services/comments-service";
import {Link} from "react-router-dom";

// code from tuiter

const CommentList = ({gameId, newestComments}) => {
    const {comments, loading} = useSelector(
        state => state.commentsData)


    const [gameComments, setGameComments] = useState([]);


    const fetchGameComments = async () => {
        if (gameId === undefined) {
            console.log("NO GAME GIVEN")
            const action = await findAllComments();
            setGameComments(action)
        } else {
            console.log(`FINDING COMMENTS FOR GAME ${gameId}`)
            const result = await dispatch(findCommentsByGameIdThunk(gameId))
            setGameComments(result.payload)
        }

    }
    const dispatch = useDispatch();
    useEffect(() => {
        fetchGameComments()

    }, [comments])

    return (
        <ul className={"list-group"}>
            {
                gameComments && gameComments.map(post =>
                    <div className={"list-group-item "}>
                        {newestComments ?
                        <div key={post._id}>On <Link to={`/details/${post.gameId}`}>{post.gameName}</Link>: <CommentItem
                            key={post._id} post={post}/>
                        </div>
                        :
                        <CommentItem key={post._id} post={post}/>
                        }
                    </div>
                )

            }
        </ul>
    );
};

export default CommentList