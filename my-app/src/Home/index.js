import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import GameSummaryComponent from "../GameComponents/game-summary-component";
import {findAllUsersThunk, profileThunk} from "../Thunks/user-thunks";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();


    const [users, setUsers] = useState([])

    const getUsers = async () => {
        // const profile = await userService.profile();
        const action = await dispatch(findAllUsersThunk());
        setUsers(action.payload);
    };

    useEffect(() => {
        // if (username) {
        //     getUserByUsername();
        // } else {
        //     getProfile();
        // }
        getUsers();

    }, []);


    return(
        <div>
            <Navigation/>
            <h1>Home</h1>

            <h2>Latest Post</h2>
            <h2>Newest User</h2>

            {/*// https://stackoverflow.com/questions/37542093/get-the-last-element-in-json-array*/}
            {/*{JSON.stringify(users[users.length-1].username)}*/}
        </div>
    )
}
export default HomePage