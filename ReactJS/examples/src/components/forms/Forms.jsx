import React from "react";
import "./Forms.css";

const Forms = () => {
    const [name, setName] = React.useState("");
    const [newName, setnewName] = React.useState("");


    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = (event) => {
        setnewName(name);

        event.preventDefault();
    }



    return (
        <div className="react_form">
            <h1>Hello!, {newName}</h1>
            <form className="felçx" onSubmit={handleClick}>
                <input onChange={handleChange} type="text" placeholder="your email here..." value={name} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Forms;