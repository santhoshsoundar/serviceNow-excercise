import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CodeBlock from "./components/CodeBlock/CodeBlock";

function App() {
  const componentDocu = `        
    // Sample documentation
    function docAPI() {
      ...
    }
  `;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Starter - ServiceNow Excercise</h2>
        <a
          class="code-link"
          target="blank"
          href="https://github.com/santhoshsoundar/serviceNow-excercise"
        >
          {"<GitHub>"}
        </a>
      </header>
      <div className="content">
        <CodeBlock textContent={componentDocu} />
      </div>
    </div>
  );
}

export default App;
