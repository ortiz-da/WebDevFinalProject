import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const COMMENTS_API = `${API_BASE}/comments`;

export const createComment = async (comment) => {
    const response = await axios.post(COMMENTS_API, comment)
    return response.data;
}
export const findComments  = async ()     => {
    const response = await axios.get(COMMENTS_API);
    const comments = response.data;
    return comments;
}
export const deleteComment = async (cid) => {
    const response = await axios
        .delete(`${COMMENTS_API}/${cid}`)
    return response.data
}
export const updateComment = async (comment) => {
    const response = await axios
        .put(`${COMMENTS_API}/${comment._id}`, comment);
    return comment;
}