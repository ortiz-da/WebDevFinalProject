// import React, {useEffect, useState} from "react";
// import Navigation from "../Navigation";
// import {Link, useParams, useNavigate} from "react-router-dom";
// import {apiSearch, apiDetails} from "../API/game-service";
// const ResultsPage = () => {
//
//     let {criteria} = useParams()
//
//     const [results, setResults] = useState([]);
//
//
//     useEffect( () => {
//
//         const getResults = async () => {
//             const results = await apiSearch(criteria)
//             console.log(results)
//             setResults(results)
//         }
//
//         getResults()
//     },[])
//
//
//
//
// let navigate = useNavigate();
//
//     return(
//         <>
//             <Navigation/>
//             <button className={"btn btn-primary"} onClick={() => navigate(-1)}>Back</button>
//             <h1>Results for: "{criteria}"</h1>
//             <ul className={"list-group"}>
//                 {
//                     results.map((result) =>
//                         <div className={"card my-3"} key={result.id} style={{width: "18rem"}}>
//                             <Link to={`/details/${result.id}`}><h4 className={"card-title"}>{result.name}</h4></Link>
//
//                             <img className={"card-img-top"} src={result.background_image}></img>
//                         </div>
//                     )
//                 }
//             </ul>
//
//         </>
//     )
// }
// export default ResultsPage