import "./App.css";

import { useState } from "react";

import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { ChooseNews } from "./components/ChooseNews";
import { YourNews } from "./components/YourNews";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {/* {user ? <Home user={user} /> : <Login setUser={setUser} />} */}
      {/* <Home user={user} /> */}
      <YourNews user={user} />
    </div>
  );
}

export default App;
