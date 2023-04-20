import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {deleteCommentThunk, findCommentsByGameIdThunk, findCommentsThunk} from "../Thunks/comments-thunks";
import CommentStats from "./comment-stats";
import CommentItem from "./comment-item";

// code from tuiter

const CommentList = ({gameId}) => {
    const {comments, loading} = useSelector(
        state => state.commentsData)


    const [gameComments, setGameComments] = useState([]);


    const fetchGameComments = async () => {
        console.log(`FINDING COMMENTS FOR GAME ${gameId}`)
        const result = await dispatch(findCommentsByGameIdThunk(gameId))
        setGameComments(result.payload)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        fetchGameComments()
    }, [comments])

    const deleteCommentHandler = (id) => {
        dispatch(deleteCommentThunk(id));
    }

    return (
        <ul className={"list-group"}>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                gameComments.map(post => <CommentItem key={post._id} post={post}/>)
            }
        </ul>
    );
};

export default CommentList