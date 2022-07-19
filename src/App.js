import React from "react";
import "./App.css";
import Logo from "./Logo";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header>
        <h1 className="title">DICTION</h1>
        <small> built by</small>
        <Logo />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <p>
          <a
            href="https://github.com/vsenapathi/react-dictionary"
            target="_blank"
            rel="noreferrer"
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
