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
            <div className={"card my-3 bg-dark text-white m-1"} key={gameDetails.id}
                 style={{width: "18rem", height: "18rem"}}>
                <Link to={`/details/${gameDetails.id}`}>
                    {/*USING: https://getbootstrap.com/docs/4.0/components/card/*/}
                    {/*https://stackoverflow.com/questions/37287153/how-to-get-images-in-bootstraps-card-to-be-the-same-height-width*/}

                    <img className="card-img-top" src={gameDetails.background_image} alt="Card image"
                         style={{width: "100%", height: "18rem", objectFit: "cover"}}/>
                    <div className="card-footer bg-black text-white" style={{minHeight: "4rem"}}>
                        {gameDetails.name}
                    </div>
                </Link>
            </div>
            :
            <i className="fas fa-3x fa-spinner fa-spin"></i>
    )

}

export default GameCard