import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import GameSummaryComponent from "../GameComponents/game-summary-component";
import {findAllUsersThunk, profileThunk} from "../Thunks/user-thunks";
import {useDispatch, useSelector} from "react-redux";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Link} from "react-router-dom";
import CommentItem from "../Comments/comment-item";
import CommentsList from "../Comments/comments-list";
import UserLikesList from "../Profile/user-likes-list";

{/*SLIDER CODE FROM: https://www.npmjs.com/package/react-animated-slider*/
}


const slides = [
    {
        image: 'https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg',
        id: '22511'
    },
    {
        image: 'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        id: '9767'
    },
    {
        image: 'https://media.rawg.io/media/games/9f3/9f3c513b301d8d7250a64dd7e73c62df.jpg',
        id: '58829'
    }
];


const HomePage = () => {


    const {currentUser} = useSelector(state => state.userData)

    return (
        <div>
            <Navigation/>
            <h1>Home</h1>
            {
                currentUser ? <h2>Welcome back {currentUser.username}!</h2> : <h2>Welcome to GameSearch!</h2>
            }
            {
                currentUser ?
                    <div>
                        <p>Re-visit some of your liked games:</p>
                        <UserLikesList userId={currentUser._id}/>
                    </div>
                    :
                    <div><p>🎮This site is made for gamers like you, so you should feel right at
                        home!🎮</p>
                        <p>Features include:</p>
                        <ul className={"list-group border border-secondary my-4"}>
                            <li className={"list-group-item"}>🕹️ Searching a massive game database</li>
                            <li className={"list-group-item"}>❤️️ Liking games, which can then be found on your profile</li>
                            <li className={"list-group-item"}>🗨️️ Comment on your favorite games for others to see</li>
                            <li className={"list-group-item"}>👾️ Following users and seeing what they're up to</li>
                        </ul>

                        <p>Below are just a small sample of the games you can search for here. Click on the image to
                            view more details.</p>
                        <hr/>
                    </div>

            }


            <Slider
                slideIndex={2}
                duration={3000}
                infinte={true}
                autoplay={2000}
            >
                {slides.map((slide, index) =>
                    <div key={index}>
                        {/*https://stackoverflow.com/questions/12082913/with-css-how-do-i-make-an-image-span-the-full-width-of-the-page-as-a-background*/}
                        <Link to={`/details/${slide.id}`}>
                            <img src={slide.image} width={"100%"} height={"auto"}/>
                        </Link>

                    </div>)}
            </Slider>
            <hr/>

            <h2>Latest Comments</h2>

            <CommentsList newestComments={true}></CommentsList>
        </div>
    )
}
export default HomePage