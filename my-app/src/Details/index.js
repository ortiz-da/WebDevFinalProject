import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import {useNavigate, useParams} from "react-router-dom";
import {getGameDetails} from "../Services/game-service";
import CommentBox from "./comment-box";
import CommentList from "../Comments/comments-list";

const DetailsPage = () => {

    let {gameId} = useParams()

    const [details, setDetails] = useState({});

    useEffect( () => {

        const getDetails = async () => {
            const details = await getGameDetails(gameId)
            console.log(details)
            setDetails(details)
        }

        getDetails()
    },[])


    let navigate = useNavigate();


    return(
        <>
            <Navigation/>
            <button className={"btn btn-primary"} onClick={() => navigate(-1)}>Back</button>

            <h1>Details</h1>

            <div className={"position-relative mb-2"}>

                <img className={"img-fluid"} src={details.background_image}/>
                <div className={"position-absolute start-0 bottom-0 text-light m-2 fs-2 fw-bold"}><i className={"far fa-heart"}></i> {details.name}</div>
            </div>
            <h2>About</h2>

            {/*https://medium.com/@uigalaxy7/how-to-render-html-in-react-7f3c73f5cafc*/}
            <div className={"border rounded border-primary p-3 my-4"} dangerouslySetInnerHTML={{__html: details.description}}></div>

            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-2 border-primary"}>
                        <div className={"row border-top border-bottom border-primary border-end fw-bolder"}>Website</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Release Date</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Metacritic Rating</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Subreddit</div>
                    </div>
                    <div className={"col"}>
                        <div className={"row border-top border-bottom border-primary"}>
                            {
                                details.website === "" ? "N/A":
                                    <a className={"p-0"} href={details.website}>{details.website}</a>
                            }

                        </div>
                        <div className={"row border-bottom border-primary "}>{details.released === "" ? "N/A" : details.released}</div>
                        <div className={"row border-bottom border-primary "}>{details.metacritic === null ? "N/A" : details.metacritic}</div>
                        <div className={"row border-bottom border-primary"}>
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


            <h2>Discussion</h2>
            <CommentBox/>
            <CommentList/>

        </>
    )
}
export default DetailsPage