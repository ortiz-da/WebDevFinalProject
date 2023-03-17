import React from "react";
import Navigation from "../Navigation";

const SearchPage = () => {
    return(
        <>
            <Navigation/>
            <h1>Search</h1>
            <div className={"input-group"}>
                <input type={"text"} className={"form-control"}/>
                <div className={"input-group-append"}>
                    <button className={"btn btn-outline-secondary"}>Search</button>
                </div>

             </div>

        </>
    )
}
export default SearchPage