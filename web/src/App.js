import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import React from "react";
import { useLocation } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import Dashboard from "./components/Dashboard";
import Pets from "./components/Pets";
import Profile from "./components/Profile";
import db from "./petsInfo";

const App = (props) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [petId, setPetId] = React.useState("");

  let location = useLocation().pathname.substr(1);

  if (!location) location = "Dashboard";

  return (
    <MDBContainer>
      {isAuthenticated ? (
        <div>
          <NavBar setAuthenticated={setAuthenticated} location={location} />
          <div style={{ paddingTop: "20pt" }}>
            {location === "Dashboard" && <Dashboard db={db} />}
            {location === "Pets" && <Pets setPetId={setPetId} db={db} />}
            {location === "Profile" && <Profile petId={petId} db={db} />}
          </div>
        </div>
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </MDBContainer>
  );
};

export default App;
