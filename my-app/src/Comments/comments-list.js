import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {deleteCommentThunk, findCommentsThunk} from "../Thunks/comments-thunks";


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
                comments.map(post =>

                    <div className="list-group-item p-1">
                        <div className="row p-1">
                            <div className="col-md-1 col-2 p-1">
                                <img className="img-fluid rounded-circle m-2" width="48px" height="48px"
                                     src={`https://i1.sndcdn.com/avatars-HJxyKlpKxjj2upYS-quuw8g-t500x500.jpg`} alt={""}></img>
                            </div>
                            <div className="col-md-11 col-10 py-2 px-4">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteCommentHandler(post._id)}></i>
                                <div className="fw-bold">{post.username}
                                    <span className="text-secondary fw-normal"> - {post.time}</span>
                                </div>
                                <div className="text-secondary fw-normal">{post.commentText}</div>
                                <div className={"pt-3"}>
                                    {/*<TuitStats post={post}></TuitStats>*/}
                                </div>
                            </div>
                        </div>


                    </div>

                )
            }
        </ul>
    );
};

export default CommentList