import React from "react";
import "./App.css";
import Logo from "./Logo";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="container">
        <div className="row">
          <div className="col">
            <h1 className="title text-right">DICTION</h1>
          </div>
          <div className="col">
            {" "}
            <div className="row">
              <small> built by</small>
            </div>
            <div className="row">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <p className="text-muted small pb-3 text-center">
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
