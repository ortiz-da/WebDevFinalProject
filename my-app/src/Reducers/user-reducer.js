import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    createUserThunk,
    updateUserThunk,
    deleteUserThunk,
    loginThunk,
    logoutThunk,
    findUserByIdThunk,
    registerThunk,
    profileThunk
} from "../Thunks/user-thunks";

const initialState = {
    currentUser: {},
    loading: false

}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [loginThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.currentUser = payload
            },
        [loginThunk.rejected]:
            (state, {payload}) => {
                state.loading = false
                state.currentUser = {}
            },

        [loginThunk.rejected]:
            (state, {payload}) => {
                state.loading = false
                state.currentUser = {}
            },

        [logoutThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.currentUser = {}
            },
        [registerThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.currentUser = payload
            },

    },
    reducers: {}
});


export default usersSlice.reducer;