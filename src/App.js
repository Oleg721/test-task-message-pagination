import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Comments from "./pages/Comments";

function App() {

  return (
    <Router>
        <Comments/>
    </Router>
  );
}

export default App;
