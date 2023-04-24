import {useParams} from "react-router-dom";
import Navigation from "../Navigation";
import React, {useEffect, useState} from "react";
import * as usersService from "../Services/user-service.js"
import AccountChip from "../Profile/account-chip";
import {findAllComments, findCommentsByUserId} from "../Services/comments-service";
import {getAllLikes, getGameLikesByUserId} from "../Services/user-service.js";
import {useSelector} from "react-redux";

const AdminPage = () => {

    const [allUsers, setAllUsers] = useState([]);

    const [allLikesCount, setAllLikesCount] = useState(0)

    const fetchAllUsers = async () => {
        const users = await usersService.findAllUsers()

        setAllUsers(users)
    }


    const [commentCount, setCommentCount] = useState(0)

    const {currentUser} = useSelector(state => state.userData)


    const fetchComments = async () => {
        const comments = await findAllComments()
        setCommentCount(comments.length)
    }

    const fetchAllLikes = async () => {
        const likes = await usersService.getAllLikes()

        setAllLikesCount(likes.length)
    }


    useEffect(() => {
        fetchAllUsers()
        fetchComments()
        fetchAllLikes()
    }, [])


    return (


        <div>

            {
                currentUser !== null && currentUser.role === "admin" && (
                    <div>
                        <Navigation/>
                        <h1>Admin Page</h1>

                        <h2>All Users</h2>

                        {/*// USING: https://stackoverflow.com/a/19608958*/}

                        <div className={"list-group my-4"}>
                            {allUsers &&
                                allUsers.map(user =>
                                    <div className={"list-group-item"}>
                                        <AccountChip userId={user._id}></AccountChip>
                                    </div>
                                )
                            }
                        </div>

                        <hr/>


                        {/*https://stackoverflow.com/questions/15115052/how-to-set-up-fixed-width-for-td*/}

                        <h2>Site Stats</h2>
                        <div className={"card pt-2 ps-2 pe-2"}>
                            <table className={"table "}>

                                <tbody>
                                <tr>
                                    <td>Number of comments made on site:</td>
                                    <td className={"text-end"}>{commentCount}</td>
                                </tr>
                                <tr>
                                    <td>Number of likes on site:</td>
                                    <td className={"text-end"}>{allLikesCount}</td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                )

            }

        </div>
    )
}
export default AdminPage