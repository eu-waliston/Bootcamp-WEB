import React, { useState } from "react";
import "./ToDo.css";
import ToDiIten from "./ToDoIten";


const TODO = () => {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function deleteIten(id){
        setItems((prevItens) => {
            return prevItens.filter(
                (item, index ) => {
                    return index !== id
                }
            )
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    onChange={handleChange}
                    type="text"
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add</span>
                    
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem, index) => (

                        <ToDiIten
                            key={index}
                            id={index}
                            title={todoItem}
                            onChecked={deleteIten}
                        />

                    ))}
                </ul>
            </div>
        </div>
    );



}

export default TODO;