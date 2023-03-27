import React from "react";
import Navigation from "../Navigation";
import GameSummaryComponent from "../GameComponents/game-summary-component";

const HomePage = () => {



    return(
        <>
            <Navigation/>
            <h1>Home</h1>

            <GameSummaryComponent gameData={{}}></GameSummaryComponent>
        </>
    )
}
export default HomePage