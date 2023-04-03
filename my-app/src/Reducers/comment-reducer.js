import {createSlice} from "@reduxjs/toolkit";

import {createCommentThunk, deleteCommentThunk, findCommentsThunk} from "../Thunks/comments-thunks";

const initialState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
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
            },
        [deleteCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = state.comments
                    .filter(c => c._id !== payload)
            },

        [createCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const newComment = {...payload}
                console.log(newComment)
                state.comments.push(newComment)
            },


    },
    reducers: {}
});


export default commentsSlice.reducer

// export const {
//     createTuit, deleteTuit, updateTuit
// } = tuitsSlice.actions