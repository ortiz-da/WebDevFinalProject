import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../Services/comments-service"

export const findCommentsThunk = createAsyncThunk(
    'comments/findComments', async () =>
        await service.findComments()
)

export const deleteCommentThunk = createAsyncThunk(
    'comments/deleteComment',
    async (commentId) => {
        await service.deleteComment(commentId)
        return commentId
    })

export const createCommentThunk = createAsyncThunk(
    'comments/createComment',
    async (comment) => {
        const newComment = await service.createComment(comment)
        return newComment
    })


export const updateCommentThunk =
    createAsyncThunk(
        'comments/updateComment',
        async (comment) => {
            await service.updateComment(comment)
        }
    )

export const findCommentsByGameIdThunk = createAsyncThunk(
    'comments/findCommentsByGameId', async (gameId) =>
        await service.findCommentsByGameId(gameId)
)

