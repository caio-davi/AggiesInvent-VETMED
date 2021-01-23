import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import React, { useState } from "react";

const App = (props) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  return (
    <>
      {isAuthenticated ? (
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </>
  );
};

export default App;
