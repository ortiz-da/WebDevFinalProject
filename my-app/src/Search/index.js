import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import apiSearch from "../API/test-request";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";


// https://getbootstrap.com/docs/5.0/forms/input-group/
const SearchPage = () => {

    const navigate = useNavigate()

    const [searchText, setSearchText] = useState("");


    const searchChangeHandler = (event) => {
        const searchValue = event.target.value;
        setSearchText(searchValue);
    }


    const searchButtonHandler = async () => {
        // reference: https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function
        navigate(`/results/${searchText}`)
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


        </>
    )
}
export default SearchPage