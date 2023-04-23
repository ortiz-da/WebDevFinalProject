import {Link, useParams} from "react-router-dom";
import GameCard from "./game-card";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findLikesByUserIdThunk} from "../Thunks/user-thunks";
import {getGameLikesByUserId} from "../Services/user-service";
import {getFollowers} from "../Services/follow-service";
import * as followService from "../Services/follow-service";
import AccountChip from "./account-chip";

const FollowingList = ({userId}) => {

    const [userFollowing, setUserFollowing] = useState([]);

    const fetchUserFollowing = async () => {

        if (userId) {
            const following = await followService.getFollowing(userId)

            setUserFollowing(following)
        }

    }


    useEffect(() => {
        fetchUserFollowing()
    }, [userId])


    // USING: https://stackoverflow.com/a/19608958
    return (
        <div className={"list-group my-4"}>
            {userFollowing &&
                userFollowing.map(follow =>
                    <div className={"list-group-item"}>
                        <AccountChip userId={follow.following}></AccountChip>
                    </div>
                )
            }
        </div>


    )
}

export default FollowingList;