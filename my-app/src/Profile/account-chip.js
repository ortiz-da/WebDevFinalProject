import React, {useEffect, useState} from "react";
import * as followService from "../Services/follow-service";
import * as userService from "../Services/user-service";
import {Link} from "react-router-dom";

const AccountChip = ({userId}) => {

    const [userInfo, setUserInfo] = useState();

    const fetchUserInfo = async () => {
        if (userId) {
            console.log(userId)
            const user = await userService.findUserById(userId);
            console.log(user)
            setUserInfo(user);
        }
    }

    useEffect(() => {
        fetchUserInfo()
    }, [userId])

    return (
        userInfo ?

            <Link to={`/profile/${userInfo._id}`}>
                <img className="img-fluid rounded-circle m-2" width="48px"
                     height="48px"
                     src={userInfo.pfp} alt={""}>
                </img>
                {userInfo.username}


            </Link>

            : <i className="fas fa-3x fa-spinner fa-spin"></i>


    )

}
export default AccountChip