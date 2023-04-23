import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";
import {getFollowers} from "../Services/follow-service";
import * as followService from "../Services/follow-service";

const FollowerList = ({userId, length}) => {

    const [userFollowers, setUserFollowers] = useState([]);

    const fetchUserFollowers = async () => {

        if(userId) {
            const followers = await followService.getFollowers(userId)
            console.log(followers)
            setUserFollowers(followers)
        }

    }


    useEffect(() => {
        fetchUserFollowers()
    }, [userId])


    // USING: https://stackoverflow.com/a/19608958
    return (
        <div className={"row"}>
            {userFollowers &&
                userFollowers.map(user =>
                    <div className={"col-auto my-5"}>
                        <Link to={`/profile/${user.follower}`}>
                            {user._id}
                        </Link>
                    </div>
                )
            }
        </div>


    )
}

export default FollowerList;