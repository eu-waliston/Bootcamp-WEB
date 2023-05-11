import React from "react";
import "./App.css"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./components/Notes/Notes";



const App = () => {
  return (
    <>
    <Header />
      <div className="App">
        <Notes 
          title="Note 01"
          note="Hello World!"
        />
      </div>
      < Footer/ >
    </>

  )
}

export default App;