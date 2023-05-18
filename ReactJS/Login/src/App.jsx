import React from 'react';
import "./App.css";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

let isLoggedIn = false;

const App = () => {
  return (
    <div className="App">
     {
      isLoggedIn ? <Home /> : <Login />
     }
    </div>
  )
}

export default App;
