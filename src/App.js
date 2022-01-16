import "./App.css";

import { useState } from "react";

import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    // <div className="App">{user ? <Home /> : <Login setUser={setUser} />}</div>
    <div className="App">{user ? <Home /> : <Home />}</div>
  );
}

export default App;
