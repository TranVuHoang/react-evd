import "./App.css";
import logo from "./logo.svg";
// JSX là cú pháp mở rộng của js(Javascrip XML)
// ES6

const App = () => {
  const name = "Hoàng JR";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name === "Hoàng JR" ? name : "Guest"}!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
