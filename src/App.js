import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Comments from "./pages/Comments";

function App() {

  return (
    <Router>
        <div className="App">
            <Comments  />
        </div>
    </Router>
  );
}

export default App;
