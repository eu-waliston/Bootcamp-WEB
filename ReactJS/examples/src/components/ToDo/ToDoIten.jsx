import React, { useState } from "react";


const ToDiIten = (props) => {

    const [done, setDone] = useState(true);

    const setDoneStyle = () => {
        setDone(!done)
    }

    return (
        <div className="todo--iten">
            <i className="bi bi-check" onClick={setDoneStyle}></i>

            <li className={done ? "iten" : "iten--effect"}>
                {props.title}
            </li>


            <i className="bi bi-trash2" onClick={() => {
                props.onChecked(props.id);
            }}></i>
        </div>
    )
}

export default ToDiIten;