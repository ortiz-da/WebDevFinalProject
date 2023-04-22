import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";

const UserLikesList = ({userId}) => {

    const [userLikes, setUserLikes] = useState();

    const fetchLikes = async () => {
        console.log(`GETTING LIKES FOR PROFILE ${userId}`)
        const likes = await getGameLikesByUserId(userId)
        setUserLikes(likes)
    }


    useEffect(() => {
        fetchLikes()
    }, [userId])


    return (
        <div>
            <h1>User likes</h1>

            {/*CODE FROM: https://mdbootstrap.com/docs/standard/extended/horizontal-list/*/}

            <ul className={"list-group list-group-horizontal position-relative overflow-auto"}>
                {userLikes &&
                    userLikes.map(game => <div><GameCard gameId={game.gameId}/></div>
                    )
                }
            </ul>
        </div>


    )
}

export default UserLikesList;