import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import GameSummaryComponent from "../GameComponents/game-summary-component";
import {findAllUsersThunk, profileThunk} from "../Thunks/user-thunks";
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();


    const {comments} = useSelector(
        state => state.commentsData)






    return(
        <div>
            <Navigation/>
            <h1>Home</h1>

            <h2>Latest Post</h2>
            <h2>Newest User</h2>

            <ul>
            {
                comments.map(comment => <li key={comment._id}>post</li>)
            }
            </ul>
        </div>
    )
}
export default HomePage