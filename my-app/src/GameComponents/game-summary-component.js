import React from "react";


const GameSummaryComponent = ({gameData}) => {
    return(
        <div className={"card w-50"}>
            <img className="card-img-top" src={gameData.name} alt="Card image cap"></img>
            <div className={"card-body"}>
                <h5 className={"card-title"}>{gameData.name}</h5>
                <p className={"card-text"}>{gameData.description}</p>
            </div>
        </div>
    )
}
export default GameSummaryComponent;