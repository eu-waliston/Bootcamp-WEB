import React from "react";
import "./Strike.css";

const Strike = () => {
    function strikeThrough() {
        document.getElementById("root").style.textDecoration = "line-through"
    }


    return (
        <div className="strike">
            <h1>List</h1>
            <div>
                <li>Buy Milk</li>
            </div>
            <div className="buttons">
                <button className="btn" onClick={strikeThrough}>Mark as Done</button>
                <button className="btn"> Unmark as Done</button>
            </div>
        </div>
    )
}




export default Strike;