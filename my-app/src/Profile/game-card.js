import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getGameDetails} from "../Services/game-service";


const GameCard = ({gameId}) => {

    const [gameDetails, setGameDetails] = useState()


    const fetchDetails = async () => {
        const details = await getGameDetails(gameId)

        setGameDetails(details)
    }

    useEffect(() => {
        fetchDetails()
    }, [])


    return (
        gameDetails ?
            <div className={"card my-3"} key={gameDetails.id} style={{width: "18rem"}}>
                <Link to={`/details/${gameDetails.id}`}>
                    <h4 className={"card-title"}>{gameDetails.name}</h4>
                    <img className={"card-img-bottom"} src={gameDetails.background_image}></img>

                </Link>
            </div>
            :
            <i className="fas fa-3x fa-spinner fa-spin"></i>
    )

}

export default GameCard