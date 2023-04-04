// using code from tuiter app

import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateCommentThunk} from "../Thunks/comments-thunks";

const CommentStats = ({post}) => {

    let [comment, setComment] = useState(post)
    const dispatch = useDispatch();

    const likeHandler = (oldComment) => {


        // user un-likes comment
        if (oldComment.liked) {
            console.log("unlike")
            const newLikeCount = oldComment.likes - 1;
            const newLikeValue = false;
            const updatedComment = {...oldComment, liked: newLikeValue, likes: newLikeCount}
            setComment(updatedComment)

            dispatch(updateCommentThunk({
                ...comment,
                likes: comment.likes - 1,
                liked: false
            }))


        }
        // user likes comment
        else {
            const newLikeCount = oldComment.likes + 1;
            const newLikeValue = true;
            const updatedComment = {...oldComment, liked: newLikeValue, likes: newLikeCount}
            setComment(updatedComment)
            dispatch(updateCommentThunk({
                ...comment,
                likes: comment.likes + 1,
                liked: true
            }))

        }



    }

    return (
        <div className={"row"}>
            <div className={"col"}>
                <span onClick={() => likeHandler(comment)}>
                    {comment.liked ?
                        <i className={"fas fa-heart"} style={{color: "red"}}></i> :
                        <i className={"far fa-heart"}></i>}
                </span>

                <span className="text-secondary fw-normal"> {comment.likes}</span>
            </div>



        </div>
    );

}

export default CommentStats