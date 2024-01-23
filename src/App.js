
// import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from "./Components/PlayerList";
import { Badge } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>
        <Badge bg="secondary" >FIFA Dream Team</Badge>
      </h1>
      <PlayerList/>

    </div>
  );
}

export default App;
