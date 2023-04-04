import CommentStats from "./comment-stats";
import React from "react";

const commentItem = ({
                         post = {
                             "_id": 123,
                             "username": "SpaceX",
                             "time": "2h",
                             "liked": true,
                             "likes": 333,
                             "commentText": "This is some example text that would fill a tuit."
                         }
                     }) => {


    return (
        <div className="list-group-item p-1">
            <div className="row p-1">
                <div className="col-md-1 col-2 p-1">
                    <img className="img-fluid rounded-circle m-2" width="48px" height="48px"
                         src={`https://i1.sndcdn.com/avatars-HJxyKlpKxjj2upYS-quuw8g-t500x500.jpg`} alt={""}></img>
                </div>
                <div className="col-md-11 col-10 py-2 px-4">
                    {/*<i className="bi bi-x-lg float-end"*/}
                    {/*   onClick={() => deleteCommentHandler(post._id)}></i>*/}
                    <div className="fw-bold">{post.username}
                        <span className="text-secondary fw-normal"> - {post.time}</span>
                    </div>
                    <div className="text-secondary fw-normal">{post.commentText}</div>
                    <div className={"pt-3"}>
                        <CommentStats post={post}></CommentStats>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default commentItem;