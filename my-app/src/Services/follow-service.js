// USING: https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/

import axios from "axios";
const REST_API_URL = "http://localhost:4000/api/";


const api = axios.create({
    withCredentials: true,
});

export const followUser = async (follow) => {
    const response = await api.post(`${REST_API_URL}/follows/`, follow);
    return response.data;
};

export const unFollowUser = async (follow) => {
    const response = await api.delete(`${REST_API_URL}/follows/`, follow);
    return response.data;
};

export const getFollowing = async (userId) => {
    const response = await api.get(`${REST_API_URL}/followed/`, userId);
    return response.data;
};

export const getFollowers = async (userId) => {
    const response = await api.get(`${REST_API_URL}/followers/`, userId);
    return response.data;
};