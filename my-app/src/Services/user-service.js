// COPIED FROM: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/

import axios from "axios";
const USERS_REST_API_URL = "http://localhost:4000/api/users";
const LIKES_REST_API_URL = "http://localhost:4000/api/likes";


const api = axios.create({
    withCredentials: true,
});

export const findAllUsers = async () => {
    const response = await api.get(USERS_REST_API_URL);
    return response.data;
};

export const createUser = async (user) => {
    const response = await api.post(USERS_REST_API_URL, user);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_REST_API_URL}/${user._id}`, user);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`${USERS_REST_API_URL}/${id}`);
    return response.data;
};

export const login = async (user) => {
    const response = await api.post(`${USERS_REST_API_URL}/login`, user);
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${USERS_REST_API_URL}/logout`);
    return response.data;
};

export const findUserById = async (id) => {
    const response = await api.get(`${USERS_REST_API_URL}/${id}`);
    return response.data;
};

export const register = async (user) => {
    const response = await api.post(`${USERS_REST_API_URL}/register`, user);
    return response.data;
};

export const profile = async () => {
    const response = await api.get(`${USERS_REST_API_URL}/profile`);
    return response.data;
};

export const getGameLikesByUserId = async (userId) => {
    console.log("USER SERVICE GETTING GAME LIKES")
    const response = await api.get(`${LIKES_REST_API_URL}/${userId}`);
    return response.data;
}

export const getAllLikes = async () => {
    const response = await api.get(`${LIKES_REST_API_URL}`);
    return response.data;
}