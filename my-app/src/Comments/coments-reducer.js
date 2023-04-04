import {createSlice} from "@reduxjs/toolkit";
import {findCommentsThunk} from "../Services/comments-thunsk";

const initialState = {
    comments: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateComment = {
    ...currentUser,
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
                state.tuits = []
            },
        [findCommentsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = payload
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
} = tuitsSlice.actions