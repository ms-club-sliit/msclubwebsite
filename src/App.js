<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
=======
import React from 'react';
import './App.css';
import logo from './logo.svg';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
>>>>>>> b2f92ef302c67dba4231e573edf4a7b69c689a83
}

export default App;
