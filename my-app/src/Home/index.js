import React from "react";
import Navigation from "../Navigation";
import GameSummaryComponent from "../GameComponents/game-summary-component";

const HomePage = () => {



    return(
        <>
            <Navigation/>
            <h1>Home</h1>
            <img src={"https://cataas.com/cat/says/cat"}/>

            <GameSummaryComponent gameData={{}}></GameSummaryComponent>
        </>
    )
}
export default HomePage