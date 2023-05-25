import React, { useState } from "react";
import "./Chalange.css";


const Chalange = () => {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setContact((prevValue) => {
            if(name === 'fName') {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === 'lName') {
                return {
                    lName: value,
                    fName: prevValue.fName,
                    email: prevValue.email
                }
            } else if (name === 'email') {
                return {
                    email: value,
                    fName: prevValue.fName,
                    lName: prevValue.lName
                }
            }
        }) 
    }

    return (
        <div className="container">

            <div className="form--section">
                <h1 className="wel">Welcome</h1>
                <input onChange={handleChange} value={contact.fName} className="input-lName" name="fName" type="text" placeholder="your firt name here..." />
                <input onChange={handleChange} value={contact.lName} className="input-fName" name="lName" type="text" placeholder="your last name here..." />
                <input onChange={handleChange} value={contact.email} className="input-email" name="email" type="email" placeholder="your email here..." />
                <button className="btn--submit-primary">Submit</button>
            </div>
            <div className="info--section">
                <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043233-anime-away-face-no-nobody-spirited_113254.png" alt="logo" className="logo" />
                <br />
                <h1>Hello, <br />{contact.fName} &nbsp; {contact.lName} </h1>
                <br />
                <p>{contact.email}</p>
            </div>

        </div>
    )
}

export default Chalange;