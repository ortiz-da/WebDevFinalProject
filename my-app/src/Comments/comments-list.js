import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {deleteCommentThunk, findCommentsThunk} from "../Thunks/comments-thunks";
import CommentStats from "./comment-stats";
import CommentItem from "./comment-item";

// code from tuiter

const CommentList = () => {
    const {comments, loading} = useSelector(
        state => state.commentsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findCommentsThunk())
    }, [])

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
                comments.map(post => <CommentItem key={post._id} post={post}/>)
            }
        </ul>
    );
};

export default CommentList