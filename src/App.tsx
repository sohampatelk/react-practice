import React from "react";
import { Heading } from "./components/Heading";
import Person from "./components/Person";
import logo from "./logo.svg";
import "./App.css";

const myPersonFunction = (input: string): string => {
  return "our person is important" + input;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name="Billy-Job Bob" callbackMethod={myPersonFunction} />
      </header>
    </div>
  );
}

export default App;
