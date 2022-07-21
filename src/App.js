import React from "react";
import "./App.css";
import Logo from "./Logo";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container-fluid">
      <header className=" pt-5 text-center">
        <h1>Diction.</h1>
        <p>A Dictionary App Built In React</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="align-items-center d-flex container flex-column pb-5">
        <p className=" small text-center">
          <a
            href="https://github.com/vsenapathi/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Vathsalya Senapathi
        </p>
        <Logo />
      </footer>
    </div>
  );
}

export default App;
