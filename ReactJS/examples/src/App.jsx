import React, { useState} from "react"
import "./App.css"


const App = () => {
  // let isDone = false;
  // const strikeThrough = { textDecoration: "line-through"}
  // function strike() {
  //   document.getElementById("root").style.textDecoration = "line-through"
  // }

  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      {/* <h1>Buy Milk</h1> */}
      {/* <h1 style={  isDone ? strikeThrough : null }>Buy Milk</h1> */}
      {/* <button onClick={strike}>
        change to strike through
      </button> */}

      {/* ------------------ */}

      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}


export default App;