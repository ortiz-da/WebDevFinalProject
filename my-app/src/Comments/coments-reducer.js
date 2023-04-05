import {createSlice} from "@reduxjs/toolkit";
import {findCommentsThunk} from "../Services/comments-thunsk";
import {useSelector} from "react-redux";

const initialState = {
    comments: [],
    loading: false
}


const usersData = useSelector(state => state.usersData)


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateComment = {
    ...usersData.currentUser,
    "time": "2h",
    "liked": false,
    "replies": 0,
    "likes": 0,
    "text": ""
}


const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: {
        [findCommentsThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [findCommentsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = payload
            },
        [findCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },

    reducers: {},
})

export default commentsSlice.reducer

export const {
    createTuit, deleteTuit, updateTuit
} = commentsSlice.actions