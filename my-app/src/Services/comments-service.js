import axios from 'axios';
import {findCommentsByGameIdThunk} from "../Thunks/comments-thunks";

const API_BASE = process.env.REACT_APP_API_BASE;
const COMMENTS_API = `${API_BASE}/comments`;

const api = axios.create({
    withCredentials: true,
});

export const createComment = async (comment) => {
    const response = await api.post(COMMENTS_API, comment)
    return response.data;
}
export const findAllComments  = async ()     => {
    console.log("calling find all comments")
    const response = await api.get(COMMENTS_API);
    const comments = response.data;
    return comments;
}
export const deleteComment = async (cid) => {
    const response = await api
        .delete(`${COMMENTS_API}/${cid}`)
    return response.data
}
export const updateComment = async (comment) => {

    const response = await api
        .put(`${COMMENTS_API}/${comment._id}`, comment);

    return comment;
}

export const findCommentsByGameId = async (gameId) => {
    const response = await api.get(`${COMMENTS_API}/game/${gameId}`);
    const comments = response.data;
    return comments;
}

export const findCommentsByUserId = async (userId) => {
    console.log(`${COMMENTS_API}/user/${userId}`)
    const response = await api.get(`${COMMENTS_API}/user/${userId}`);
    const comments = response.data;
    return comments;
}