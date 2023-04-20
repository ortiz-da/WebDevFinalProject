import CommentStats from "./comment-stats";
import React, {useEffect, useState} from "react";
import {getGameDetails} from "../Services/game-service";
import {findUserById} from "../Services/user-service";

const CommentItem = ({post}) => {

    const [userInfo, setUserInfo] = useState({});


    useEffect( () => {

        const getCommentUserInfo = async () => {
            const info = await findUserById(post.userId)
            // console.log(details)
            setUserInfo(info)
        }

        getCommentUserInfo()
    },[])


    return (
        <div className="list-group-item p-1">
            <div className="row p-1">
                <div className="col-md-1 col-2 p-1">
                    <img className="img-fluid rounded-circle m-2" width="48px" height="48px"
                         src={userInfo.pfp} alt={""}></img>
                </div>
                <div className="col-md-11 col-10 py-2 px-4">
                    {/*<i className="bi bi-x-lg float-end"*/}
                    {/*   onClick={() => deleteCommentHandler(post._id)}></i>*/}
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