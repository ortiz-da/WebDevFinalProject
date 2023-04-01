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

function App() {
  return (
      <div className={"container"}>
          <BrowserRouter>

                  <Routes>
                      <Route index element={<HomePage/>}></Route>
                      <Route path={"/details/:gameId"} element={<DetailsPage/>}></Route>
                      <Route path={"/login"} element={<LoginPage/>}></Route>
                      <Route path={"/profile"} element={<ProfilePage/>}></Route>
                      <Route path={"/search/"} element={<SearchPage/>}></Route>
                      <Route path={"/results/:criteria"} element={<ResultsPage/>}></Route>


                  </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
