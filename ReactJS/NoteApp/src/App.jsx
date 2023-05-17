import React from "react";
import "./App.css"

import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";

import notes from "./notes";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {notes.map( notesItem => {
          return (
            <Notes
              key={notesItem.key}
              title={notesItem.title}
              content={notesItem.content}
            />
          )
        })}
      </div>
    </>

  )
}

export default App;