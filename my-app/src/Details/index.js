import React from "react";
import Navigation from "../Navigation";
import CommentComponent from "./comment-component";

const DetailsPage = () => {
    return(
        <>
            <Navigation/>
            <h1>DetailsPage</h1>
            <p> back</p>
            <div className={"position-relative mb-2"}>

                <img className={"img-fluid"} src={"https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"}/>
                <div className={"position-absolute start-0 bottom-0 text-light m-2 fs-2 fw-bold"}><i className={"far fa-heart"}></i> Team Fortress 2</div>
            </div>
            <h2>About</h2>
            <p>TF2 is an objective based arena shooter with unique character
                s, representing different classes, acting as a staple of casual and competitive
                gaming for Steam. Dozens of different maps and game modes are trying to keep thi
                s game alive, after all the years it was available. Each character has a vast arsenal
                that can be accessed through completing in-game achievements, randomly receiving
                them from loot-boxes within the game, crafting them or just buying and trading
                items on the Steam Market. </p>


            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-2 border-primary"}>
                        <div className={"row border-top border-bottom border-primary border-end fw-bolder"}>Website</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Release Date</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Metacritic Rating</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>Genres</div>
                        <div className={"row border-bottom border-primary border-end fw-bolder"}>ESRB Rating</div>
                    </div>
                    <div className={"col"}>
                        <div className={"row border-top border-bottom border-primary"}><a className={"p-0"} href={"https://www.teamfortress.com/"}>https://www.teamfortress.com/</a></div>
                        <div className={"row border-bottom border-primary "}>2007-10-10</div>
                        <div className={"row border-bottom border-primary "}>92</div>
                        <div className={"row border-bottom border-primary "}>FPS, Shooter, Strategy</div>
                        <div className={"row border-bottom border-primary "}>M</div>
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