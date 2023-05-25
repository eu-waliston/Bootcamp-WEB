import React, { useState } from "react";
import "./ComplexState.css";

const ComplexState = () => {
    const [fullName, setfullName] = useState({
        firstName: "",
        lastName: ""
    });

    const submitFullName = (event) => {
        // const newValue = event.target.value;
        // const inputName = event.target.name;

        const { name, value } = event.target;

        setfullName((prevValue) => {
            if (name === 'fName') {
                return {
                    firstName: value,
                    lastName: prevValue.lName
                }
            } else if (name === 'lName') {
                return {
                    firstName: prevValue.fName,
                    lastName: value
                }
            }
        })
    }


    return (
        <div className="container">
            <h1>Hello,{fullName.firstName} {fullName.lastName}</h1>
            <form>
                <input
                    name="fName"
                    onChange={submitFullName}
                    placeholder="First Name"
                    value={fullName.firstName}
                />

                <input name="lName"
                    onChange={submitFullName}
                    placeholder="Last Name"
                    value={fullName.lastName}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ComplexState;