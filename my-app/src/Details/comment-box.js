import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {createCommentThunk} from "../Thunks/comments-thunks";

const CommentBox = () => {

    let [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData)


    const templateComment = {
        "time": "2h",
        "liked": false,
        "replies": 0,
        "likes": 0,
        "userID": userData.currentUser._id
    }

    const newComment = {
        commentText: commentText,
        ...templateComment
    }
    const postButtonHandler = () => {
        dispatch(createCommentThunk(newComment))
    }

    return (
        <div>
            <div className={"row"}>
                <div className={"col-1"}>
                    <Link className={"nav-link"} to={"/profile"}><img
                        src={userData.pfp}
                        className={"img-thumbnail rounded-circle float-end"} width={55} height={55}/></Link>
                </div>
                <div className={"col-11"}>
                    <div className={"my-1"}>{userData.username}</div>
                    <textarea value={commentText}
                              className={"form-control rounded"}
                              onChange={(event) => setCommentText(event.target.value)}>
                    </textarea>
                    <div className={"btn btn-primary my-2"} onClick={postButtonHandler}>Comment</div>

                </div>
            </div>

        </div>

    )
}

export default CommentBox