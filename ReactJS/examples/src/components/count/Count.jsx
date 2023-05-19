import React, { useState } from "react";
import "./Count.css";

const Count = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div className="count">
            <h1>React Hooks</h1>
            <hr />
            <h1>{count}</h1>
            <div className="counter">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
            
        </div>
    )
}


export default Count;