import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {profileThunk} from "../Thunks/user-thunks";

function CurrentUserContext({children}) {

    const dispatch = useDispatch();

    const getCurrentUser = async () => {
        await dispatch(profileThunk());

    }
    useEffect(() => {
        getCurrentUser();
    },[])

    return(
        children
    )
}

export default CurrentUserContext