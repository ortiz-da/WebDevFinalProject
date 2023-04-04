import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../Services/user-service.js"
import {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login,
    logout,
    findUserById,
    register,
    profile
} from "../Services/user-service.js";

export const findAllUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findAllUsers()
)

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) => {
        const newUser = await service.createUser(user)
        return newUser
    }
)

export const updateUserThunk =
    createAsyncThunk(
        'users/updateUser',
        async (user) => {
            const newUser = await service.updateUser(user)
            return newUser
        }
    )

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async (userId) => {
        await service.deleteUser(userId)
        return userId
    })

export const loginThunk = createAsyncThunk(
    'users/login', async (user) => {
        await service.login(user)
        return user;
    }
)

export const logoutThunk = createAsyncThunk(
    'users/logout', async () => {
        await service.logout()
    }
)

export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async () =>
        await service.findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'users/register',
    async (user) => {
        const registeredUser = await service.register(user)
        return registeredUser
    })

export const profileThunk = createAsyncThunk(
    'users/profile', async () =>
        await service.profile()
)

