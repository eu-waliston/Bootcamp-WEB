import React from "react";
import "./Notes.css";

const Notes = (props) => {
    return (

        <div className="note__card">
            <div className="note__title">
                <div>
                    <h3>{props.title}</h3>
                </div>

            </div>
     
            <div className="note__content">
                <p>{props.content}</p>
            </div>

        </div>
    )
}

export default Notes;