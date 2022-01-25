import "../App.css";
import { ChooseNews } from "./ChooseNews";
import MyNavBar from "./MyNavBar";
import { YourNews } from "./YourNews";
import { Statistics } from "./Statistics";
import { Profile } from "./Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Home = ({ setRegister, user, setUser }) => {
  return (
    <Router>
      <div className="home">
        <MyNavBar
          className="navbar"
          setUser={setUser}
          setRegister={setRegister}
          logged={user?.interests?.length > 0}
        ></MyNavBar>
        <Routes>
          <Route
            path="/"
            exact
            element={
              user?.interests?.length > 0 ? (
                <YourNews user={user} />
              ) : (
                <ChooseNews user={user} setUser={setUser} />
              )
            }
          />
          <Route path="/statistics" exact element={<Statistics />} />
          <Route path="/profile" exact element={<Profile user={user} />} />
        </Routes>
      </div>
    </Router>

    // <div className="Home">
    //   {/* <MyNavBar
    //     className="navbar"
    //     logged={user?.interests?.length > 0}
    //   ></MyNavBar>
    //   {user?.interests?.length > 0 ? <YourNews /> : <ChooseNews />} */}
    //   <MyNavBar className="navbar" logged={true}></MyNavBar>
    //   {/* <YourNews /> */}
    //   <Statistics />
    // </div>
  );
};
