import React from "react"
import "./App.css"

const App = () => {
  // let isDone = false;
  // const strikeThrough = { textDecoration: "line-through"}
  function strike() {
    document.getElementById("root").style.textDecoration = "line-through"
  }

  return (
    <div className="App">
      <h1>Buy Milk</h1>
      {/* <h1 style={  isDone ? strikeThrough : null }>Buy Milk</h1> */}
      <button onClick={strike}>
        change to strike through
      </button>
    </div>
  )
}


export default App;