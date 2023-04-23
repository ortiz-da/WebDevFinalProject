import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";

const UserLikesList = ({userId, length}) => {

    const [userLikes, setUserLikes] = useState();

    const fetchLikes = async () => {
        console.log(`GETTING LIKES FOR PROFILE ${userId}`)
        let likes = await getGameLikesByUserId(userId)
        if(length && length < likes.length) {
            likes = likes.slice(0,length)
        }
        setUserLikes(likes)
    }


    useEffect(() => {
        fetchLikes()
    }, [userId])


    // USING: https://stackoverflow.com/a/19608958
    return (
        <div className={"row"}>
            {userLikes &&
                userLikes.map(game => <div className={"col-auto my-5"}><GameCard gameId={game.gameId}/></div>
                )
            }
        </div>


    )
}

export default UserLikesList;