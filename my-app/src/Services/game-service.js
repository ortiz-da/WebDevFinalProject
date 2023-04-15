import axios from "axios";

// https://rapidapi.com/blog/rawg-video-games-api-with-java-python-php-ruby-javascript-examples/
// https://rawg.io/apidocs
// https://rapidapi.com/accujazz/api/rawg-video-games-database
// reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function

const API_KEY = "c94f42ffc54e40a4b72503df88c071a5"
const API_BASE = "https://rawg-video-games-database.p.rapidapi.com";

const LIKES_REST_API_URL = "http://localhost:4000/api/games";

const api = axios.create({
    withCredentials: true,
});

export const getGameDetails = async (gameId) => {

    const url = `${API_BASE}/games/${gameId}?key=${API_KEY}`
    const options = {
        method: 'GET',
        url: url,
        headers: {
            'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };
    const response = await api.request(options)
    const details = response.data

    return details
    // return []

}


export const searchGames = async (searchText) => {
    const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=c94f42ffc54e40a4b72503df88c071a5&search=${searchText}`
    const options = {
        method: 'GET',
        url: url,
        headers: {
            'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    return (await api.request(options)).data.results;
    // return []

}

// from https://github.com/jannunzi/tuiter-react-web-app-cs4550-sp23/blob/project/src/napster/napster-service.js
export const likeGame = async (game) => {
    const response = await api.post(`${LIKES_REST_API_URL}/${game.gameId}/likes`, game);
    return response.data;
};

export const unlikeGame = async (game) => {
    const response = await api.delete(`${LIKES_REST_API_URL}/${game.gameId}/likes`, game);
    return response.data;
};

export const getGameLikesById = async (gameId) => {
    const response = await api.get(`${LIKES_REST_API_URL}/${gameId}/likes`, gameId);
    return response.data;
}