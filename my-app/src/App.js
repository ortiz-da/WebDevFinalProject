import logo from './logo.svg';
import './App.css';
import DetailsPage from "./Details";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "./Home";
import LoginPage from "./Login";
import ProfilePage from "./Profile";
import SearchPage from "./Search";
import ResultsPage from "./Results";
import {configureStore} from "@reduxjs/toolkit";
import commentReducer from "./Reducers/comment-reducer";
import {Provider} from "react-redux";
import userReducer from "./Reducers/user-reducer";
import RegisterPage from "./Register";


const store = configureStore({
        reducer: {
            commentsData: commentReducer,
            usersData: userReducer,
            // userData: userReducer
        }
    }
);


function App() {

    return (
        <Provider store={store}>
            <div className={"container"}>
                <BrowserRouter>

                    <Routes>
                        <Route index element={<HomePage/>}></Route>
                        <Route path={"/details/:gameId"} element={<DetailsPage/>}></Route>
                        <Route path={"/login"} element={<LoginPage/>}></Route>
                        <Route path={"/profile"} element={<ProfilePage/>}></Route>
                        <Route path={"/search/"} element={<SearchPage/>}></Route>
                        <Route path={"/search/:query"} element={<SearchPage/>}></Route>
                        <Route path={"/register"} element={<RegisterPage/>}></Route>


                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
