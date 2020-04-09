import React from "react";
import { Heading } from "./components/Heading"; //if we dont define default we have to mention class in culrly braces
import Person from "./components/Person";
import logo from "./logo.svg";
import "./App.css";
import PersonProfile from "./PersonProfile";

const myPersonFunction = (input: string): string => {
  return "our person is important" + input;
};

// let propsExampleFunction = (input: string): string => {
//   return `the answer is 42 ${input}`;
// };

function App() {
  return (
    <div className="App">
      {" "}
      {/* THis is JSX Comment. */}
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
        {/* This is person component. */}
        <Person name="Billy-Job Bob" callbackMethod={myPersonFunction} />
        <PersonProfile />
      </header>
    </div>
  );
}

export default App;
