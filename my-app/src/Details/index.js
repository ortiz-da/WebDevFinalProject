import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import {useNavigate, useParams} from "react-router-dom";
import {getGameDetails, likeGame, getGameLikesById, unlikeGame} from "../Services/game-service";
import CommentBox from "./comment-box";
import CommentList from "../Comments/comments-list";
import {useSelector} from "react-redux";

const DetailsPage = () => {

    const {currentUser} = useSelector(state => state.userData)


    let {gameId} = useParams()

    const [details, setDetails] = useState({});

    const [likeCount, setLikeCount] = useState(0);

    const [hasLiked, setHasLiked] = useState(false)


    const fetchDetails = async () => {
        const details = await getGameDetails(gameId)
        console.log("FETCHING DETAILS")
        setDetails(details)
    }

    const fetchLikes = async () => {
        console.log("FETCHING LIKES")
        const gameLikes = await getGameLikesById(gameId)
        setLikeCount(gameLikes.length)

        for (let i = 0; i < gameLikes.length; i++) {
            if(gameLikes[i].userId === currentUser._id) {
                console.log("ALREADY LIKED BY CURRENT USER");
                setHasLiked(true)
            }
        }
    }

    useEffect( () => {

        fetchLikes()

    },[currentUser])

    useEffect(() => {

        fetchDetails()
    },[])


    let navigate = useNavigate();

    const handleLikeButton = async () => {

        if(currentUser) {
            if (!hasLiked) {
                console.log("liking game")
                await likeGame({name: details.name, gameId: gameId});
                setHasLiked(true)
                setLikeCount(likeCount + 1)
            } else {
                console.log("unliking game")
                await unlikeGame({name: details.name, gameId: gameId})
                setHasLiked(false)
                setLikeCount(likeCount - 1)
            }
        }
        else {
            navigate("/login")
        }


    }


    return(
        <>
            <Navigation/>

            <button className={"btn btn-primary"} onClick={() => navigate(-1)}>Back</button>

            <h1>Details</h1>

            <div className={"position-relative mb-2"}>

                <img className={"img-fluid"} src={details.background_image}/>
                {

                        <div
                            onClick={handleLikeButton}
                            className={"position-absolute start-0 bottom-0 text-light m-2 fs-2 fw-bold bg-white bg-gradient mx-0 rounded-end"}>
                            {/*from tuiter*/}
                            <div className={"mx-3 "}>
                                {hasLiked ?
                                    <i className={"fas fa-heart"} style={{color: "red"}}></i> :
                                    <i className={"far fa-heart"}></i>}
                                {likeCount} - {details.name}
                            </div>

                        </div>

                }

            </div>
            <h2>About</h2>

            {/*https://medium.com/@uigalaxy7/how-to-render-html-in-react-7f3c73f5cafc*/}
            <div className={"border rounded border-primary p-3 my-4"} dangerouslySetInnerHTML={{__html: details.description}}></div>

            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-3 border-primary"}>
                        <div className={"row border-top border-bottom border-primary border-end fw-bolder px-3"}>Website</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder px-3"}>Release Date</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder px-3"}>Metacritic Rating</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder px-3"}>Subreddit</div>
                    </div>
                    <div className={"col"}>
                        <div className={"row border-top border-bottom border-primary px-3"}>
                            {
                                details.website === "" ? "N/A":
                                    <a className={"p-0"} href={details.website}>{details.website}</a>
                            }

                        </div>
                        <div className={"row border-bottom border-primary px-3"}>{details.released === "" ? "N/A" : details.released}</div>
                        <div className={"row border-bottom border-primary px-3"}>{details.metacritic === null ? "N/A" : details.metacritic}</div>
                        <div className={"row border-bottom border-primary px-3"}>
                            {
                                details.reddit_url === "" ? "N/A":
                                    <a className={"p-0"} href={details.reddit_url}>
                                        {details.reddit_url}
                                    </a>
                            }

                        </div>

                    </div>
                </div>
            </div>



            <div className={"my-4"}>
                <h2>Discussion</h2>
                {currentUser && <CommentBox gameDetails={details}/>}
                <CommentList gameId={gameId}/>
            </div>


        </>
    )
}
export default DetailsPage