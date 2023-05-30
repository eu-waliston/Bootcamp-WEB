import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button><i class="bi bi-trash2-fill"></i></button>
    </div>
  );
}

export default Note;
