import "./App.css";

import { useState } from "react";

import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { ChooseNews } from "./components/ChooseNews";
import { YourNews } from "./components/YourNews";
import { Statistics } from "./components/Statistics";
import { Register } from "./components/Register";

function App() {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);

  return (
    <div className="App">
      {user ? (
        <Home user={user} setUser={setUser} setRegister={setRegister} />
      ) : register ? (
        <Register setUser={setUser} />
      ) : (
        <Login setRegister={setRegister} setUser={setUser} />
      )}
      {/* <Home user={user} setUser={setUser} /> */}
      {/* <YourNews user={user} /> */}
    </div>
  );
}

export default App;
