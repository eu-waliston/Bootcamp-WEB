import React from "react";

import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";




function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />

        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={true}>
          <Fab color="primary" aria-label="add" onClick={submitNote} className="btn--ssc">
            <AddIcon />
          </Fab>
        </Zoom>


      </form>
    </div>
  );
}

export default CreateArea;
