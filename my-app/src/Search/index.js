import React, {useState} from "react";
import Navigation from "../Navigation";
import apiSearch from "../API/test-request";
import {Link, useLocation} from "react-router-dom";


// https://getbootstrap.com/docs/5.0/forms/input-group/
const SearchPage = () => {

    const [searchText, setSearchText] = useState("");

    const [searchResults, setSearchResults] = useState([]);
    const searchChangeHandler = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue);
    }

    const searchButtonHandler =  async () => {
        // reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function

        // const results = await apiSearch(searchText)
        // console.log(results)

        const results = await apiSearch(searchText)
        setSearchResults(results)
        console.log(searchResults)
    }

    return(
        <>
            <Navigation/>
            <div className={"input-group"}>
                <input type={"text"} className={"form-control"} placeholder={"Search"} onChange={searchChangeHandler} value={searchText}></input>
                <button className={"btn btn-outline-secondary"} type={"button"} onClick={searchButtonHandler}>Search</button>
             </div>


            <h3>{searchResults.length}</h3>
            <ul className={"list-group"}>
                {
                    searchResults.map((result) =>

                        <div className={"card my-3"} style={{width: "18rem"}}>
                            <Link to={"/details"}> <h4 className={"card-title"}>{result.name}</h4></Link>

                            <img className={"card-img-top"}  src={result.background_image}></img>
                        </div>

                    )
                }

            </ul>
        </>
    )
}
export default SearchPage