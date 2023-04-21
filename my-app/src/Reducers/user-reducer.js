import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk, updateUserThunk
} from "../Thunks/user-thunks";

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [loginThunk.fulfilled]:
            (state, action) => {
                state.currentUser = action.payload
            },
        [loginThunk.rejected]:
            (state, action) => {
                state.currentUser = null
            },

        [loginThunk.rejected]:
            (state, action) => {
                state.currentUser = null
            },

        [logoutThunk.fulfilled]:
            (state, action) => {
                state.currentUser = null
            },
        [registerThunk.fulfilled]:
            (state, action) => {
                state.currentUser = action.payload;
            },
        [profileThunk.fulfilled]:
            (state, action) => {
                state.currentUser = action.payload;
            },

    },
    reducers: {}
});


export default userSlice.reducer;