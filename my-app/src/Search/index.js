import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import {searchGames} from "../Services/game-service";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";


// https://getbootstrap.com/docs/5.0/forms/input-group/
const SearchPage = () => {

    const navigate = useNavigate()

    let {query} = useParams()


    const [searchText, setSearchText] = useState(query);

    const [results, setResults] = useState([]);


    useEffect( () => {

        const getResults = async () => {
            const results = await searchGames(query)
            console.log(results)
            setResults(results)
        }

        // https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized
        if(typeof query !== 'undefined') {

            console.log("getting")
            getResults()
        }

    },[query])


    const searchChangeHandler = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue);
    }


    const searchButtonHandler = async () => {
        // reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function
        navigate(`/search/${searchText}`)
    }

    return (
        <>
            <Navigation/>
            <h1>Search</h1>

            <div className={"row"}>
                <div className={"col-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 col-xxl-6"}>
                    <div className={"input-group"}>
                        <input type={"text"} className={"form-control rounded-start"} placeholder={"Search"} onChange={searchChangeHandler}
                               value={searchText}></input>
                        <button className={"btn btn-outline-primary"} type={"button"} onClick={searchButtonHandler}>Search
                        </button>
                    </div>
                </div>
            </div>
            <ul className={"row"}>
                {
                    results.map((result) =>
                        <div className={"col-auto my-5"}>
                            <div className={"card my-3 bg-dark text-white m-1"} key={result.id}
                                 style={{width: "18rem", height: "18rem"}}>
                                <Link to={`/details/${result.id}`}>
                                    {/*USING: https://getbootstrap.com/docs/4.0/components/card/*/}
                                    {/*https://stackoverflow.com/questions/37287153/how-to-get-images-in-bootstraps-card-to-be-the-same-height-width*/}

                                    <img className="card-img-top" src={result.background_image === null ?
                                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Video_Game_Controller_%2856431%29_-_The_Noun_Project.svg/640px-Video_Game_Controller_%2856431%29_-_The_Noun_Project.svg.png": result.background_image}
                                         alt="Game Image"
                                         style={{width: "100%", height: "18rem", objectFit: "cover"}}/>
                                    <div className="card-footer bg-black text-white" style={{minHeight: "4rem"}}>
                                        {result.name}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </ul>


        </>
    )
}
export default SearchPage