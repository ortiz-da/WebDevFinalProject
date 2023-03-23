// https://rapidapi.com/blog/rawg-video-games-api-with-java-python-php-ruby-javascript-examples/
// https://rawg.io/apidocs
// https://rapidapi.com/accujazz/api/rawg-video-games-database

// KEY = c94f42ffc54e40a4b72503df88c071a5
const axios = require("axios");
const key = "c94f42ffc54e40a4b72503df88c071a5";
const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games/11859?key='+key,
    headers: {
        'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
