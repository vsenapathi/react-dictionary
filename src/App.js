import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header>
        <h1>React Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <p>
          <a
            href="https://github.com/vsenapathi/react-dictionary"
            target="blank"
          >
            Open-Source Code
          </a>
          , by Vathsalya Senapathi
        </p>
      </footer>
    </div>
  );
}

export default App;
