import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {createCommentThunk} from "../Thunks/comments-thunks";

const CommentBox = ({gameDetails}) => {

    let [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.userData)

    let {gameId} = useParams()


    const postButtonHandler = async () => {

        const newComment = {
            commentText: commentText,
            "gameId": gameId,
            "userId": currentUser._id,
            "gameName": gameDetails.name,
        }

        await dispatch(createCommentThunk(newComment))
        setCommentText("")
    }

    return (
        <div>
            <div className={"row"}>


                <div className={"col-1"}>
                    <Link className={"nav-link"} to={"/profile"}><img
                        src={currentUser && currentUser.pfp}
                        className={"img-thumbnail rounded-circle float-end"} width={55} height={55}/></Link>
                </div>
                <div className={"col-11"}>
                    <div className={"my-1"}>{currentUser && currentUser.username}</div>
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