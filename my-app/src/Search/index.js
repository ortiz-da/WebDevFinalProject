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
                <div className={"col-6"}>
                    <div className={"input-group"}>
                        <input type={"text"} className={"form-control rounded-start"} placeholder={"Search"} onChange={searchChangeHandler}
                               value={searchText}></input>
                        <button className={"btn btn-outline-primary"} type={"button"} onClick={searchButtonHandler}>Search
                        </button>
                    </div>
                </div>
            </div>
            <ul className={"list-group"}>
                {
                    results.map((result) =>

                        <div className={"card my-3"} key={result.id} style={{width: "18rem"}}>
                            <Link to={`/details/${result.id}`}>
                                <h4 className={"card-title"}>{result.name}</h4>
                                <img className={"card-img-bottom"} src={result.background_image}></img>

                            </Link>
                        </div>
                    )
                }
            </ul>


        </>
    )
}
export default SearchPage