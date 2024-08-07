import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import "./App.css";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);

  function switchForm(formType) {
    if (formType == "register") {
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
    }
  }

  return (
    <div className="App">
      <h2>Authentication</h2>
      {isNewUser ? (
        <Register switchForm={switchForm} />
      ) : (
        <Login switchForm={switchForm} />
      )}
    </div>
  );
}

export default App;
