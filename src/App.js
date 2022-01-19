import "./App.css";

import { useState } from "react";

import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Home user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
