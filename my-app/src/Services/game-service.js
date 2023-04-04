import axios from "axios";

// https://rapidapi.com/blog/rawg-video-games-api-with-java-python-php-ruby-javascript-examples/
// https://rawg.io/apidocs
// https://rapidapi.com/accujazz/api/rawg-video-games-database
// reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function

const API_KEY = "c94f42ffc54e40a4b72503df88c071a5"
const API_BASE = "https://rawg-video-games-database.p.rapidapi.com";

export const getGameDetails = async (gameId) => {

    // const url = `${API_BASE}/games/${gameId}?key=${API_KEY}`
    // const options = {
    //     method: 'GET',
    //     url: url,
    //     headers: {
    //         'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
    //         'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    //     }
    // };
    // const response = await axios.request(options)
    // const details = response.data

    return {}

}


export const searchGames = async () => {

    const url = `${API_BASE}games?key=${API_KEY}`


    const options = {
        method: 'GET',
        url: url,
        headers: {
            'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };
    const response = await axios.request(options)
    const games = response.data

    return games.results;


}