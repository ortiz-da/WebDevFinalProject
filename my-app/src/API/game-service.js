// import axios from "axios";
//
// // https://rapidapi.com/blog/rawg-video-games-api-with-java-python-php-ruby-javascript-examples/
// // https://rawg.io/apidocs
// // https://rapidapi.com/accujazz/api/rawg-video-games-database
// // reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function
//
// // KEY = c94f42ffc54e40a4b72503df88c071a5
//
// export const apiSearch = async (searchText) => {
//     const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=c94f42ffc54e40a4b72503df88c071a5&search=${searchText}`
//     const options = {
//         method: 'GET',
//         url: url,
//         headers: {
//             'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
//             'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//         }
//     };
//
//     return (await axios.request(options)).data.results;
// }
//
// export const apiDetails = async (gameId) => {
//     // const url = `https://rawg-video-games-database.p.rapidapi.com/games/${gameId}?key=c94f42ffc54e40a4b72503df88c071a5`
//     // const options = {
//     //     method: 'GET',
//     //     url: url,
//     //     headers: {
//     //         'X-RapidAPI-Key': '4c5b571b7fmsh75dc2034850b961p12303cjsn2f04f8883818',
//     //         'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//     //     }
//     // };
//     //
//     // return (await axios.request(options)).data;
// }


// OLD CODE