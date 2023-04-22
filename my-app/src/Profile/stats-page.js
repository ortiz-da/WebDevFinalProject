import {useSelector} from "react-redux";
import Navigation from "../Navigation";
import React, {useEffect, useState} from "react";
import {findCommentsByUserId} from "../Services/comments-service";
import {getGameLikesByUserId} from "../Services/user-service";
import {useNavigate} from "react-router-dom";

const StatsPage = () => {


    const {currentUser} = useSelector(state => state.userData)

    const [commentCount, setCommentCount] = useState(0)
    const [likeCount, setLikeCount] = useState(0)

    const [showPassword, setShowPassword] = useState(false)

    const fetchComments = async () => {
        const comments = await findCommentsByUserId(currentUser._id)
        setCommentCount(comments.length)
    }

    const fetchLikes = async () => {
        const likes = await getGameLikesByUserId(currentUser._id)
        setLikeCount(likes.length)
    }

    useEffect(() => {
        fetchComments()
        fetchLikes()
    }, [currentUser])

    let navigate = useNavigate();
    return (
        currentUser &&
        <div>
            <Navigation/>
            <button className={"btn btn-primary"} onClick={() => navigate(-1)}>Back</button>
            <h1>Your Stats</h1>


            {/*https://stackoverflow.com/questions/15115052/how-to-set-up-fixed-width-for-td*/}
            <table className={"table w-50"}>

                <tbody>
                <tr>
                    <td>Number of comments made:</td>
                    <td className={"text-end"}>{commentCount}</td>
                </tr>
                <tr>
                    <td>Number of games liked:</td>
                    <td className={"text-end"}>{likeCount}</td>
                </tr>


                </tbody>
            </table>

            {
                currentUser && (
                    <div>
                        <label htmlFor={"password"}>Password</label>
                        <div id={"password"} className={"input-group w-50"}>
                            <input type={showPassword ? "text" : "password"} className={"form-control rounded-start "}
                                   value={currentUser.password}></input>
                            <button className={"btn btn-outline-primary"} type={"button"}
                                    onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default StatsPage

