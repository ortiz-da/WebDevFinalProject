import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";
import {getFollowers} from "../Services/follow-service";
import * as followService from "../Services/follow-service";
import AccountChip from "./account-chip";

const FollowerList = ({userId}) => {

    const [userFollowers, setUserFollowers] = useState([]);

    const fetchUserFollowers = async () => {

        if (userId) {
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
        <div className={"list-group my-4"}>
            {userFollowers &&
                userFollowers.map(follow =>
                    <div className={"list-group-item"}>
                        <AccountChip userId={follow.follower}></AccountChip>
                    </div>
                )
            }
        </div>


    )
}

export default FollowerList;