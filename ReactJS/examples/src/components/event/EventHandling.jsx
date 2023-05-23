import React, { useState } from "react";
import "./EventHandling.css";

const EventHandling = () => {
    const [isMouseOver, setisMouseOver] = useState(false);

    const handleMouseOver = () => {
        setisMouseOver(true)
    }

    const handleMouseOut = () => {
        setisMouseOver(false)
    }

    return (
        <div className="EventHandling">
            <h1>Hello</h1>
            <input type="text" placeholder="what's your email" />
            <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ backgroundColor: isMouseOver ? "#000" : "#fff", color: isMouseOver ? "#fff" : "#000" }}
            >submit</button>
        </div>
    )
}

export default EventHandling;