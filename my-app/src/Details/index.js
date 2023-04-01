import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import CommentComponent from "./comment-component";
import {useParams} from "react-router-dom";
import apiDetails from "../API/details-request";

const DetailsPage = () => {

    let {gameId} = useParams()

    const [details, setDetails] = useState({});


    const getDetails = async () => {
        const details = await apiDetails(gameId)
        console.log(details.valueOf())
    }

    useEffect( () => {

        const getDetails = async () => {
            const details = await apiDetails(gameId)
            console.log(details)
            setDetails(details)
        }

        getDetails()
    },[])




    return(
        <>
            <Navigation/>
            <h1>DetailsPage</h1>

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

            {/*<CommentComponent></CommentComponent>*/}
            {/*<CommentComponent></CommentComponent>*/}
            {/*<CommentComponent></CommentComponent>*/}

        </>
    )
}
export default DetailsPage