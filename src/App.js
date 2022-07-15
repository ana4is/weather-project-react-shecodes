import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <p>
        This project was coded by Anaïs Flechier and is open-sourced on {""}
        <a
          href="https://github.com/ana4is/weather-project-react-shecodes"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
