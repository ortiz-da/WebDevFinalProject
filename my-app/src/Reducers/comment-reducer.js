import {createSlice} from "@reduxjs/toolkit";

import {createCommentThunk, deleteCommentThunk, findAllCommentsThunk} from "../Thunks/comments-thunks";

const initialState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [findAllCommentsThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [findAllCommentsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = payload
            },
        [findAllCommentsThunk.rejected]:
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