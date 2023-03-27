import logo from './logo.svg';
import './App.css';
import DetailsPage from "./Details";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "./Home";
import LoginPage from "./Login";
import ProfilePage from "./Profile";
import SearchPage from "./Search";

function App() {
  return (
      <div className={"container"}>
          <BrowserRouter>
              <div className={"container-fluid"}>
                  <Routes>
                      <Route index element={<HomePage/>}></Route>
                      <Route path={"/details"} element={<DetailsPage/>}></Route>
                      <Route path={"/login"} element={<LoginPage/>}></Route>
                      <Route path={"/profile"} element={<ProfilePage/>}></Route>
                      <Route path={"/search"} element={<SearchPage/>}></Route>

                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
