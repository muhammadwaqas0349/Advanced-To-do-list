import React, { useState } from 'react'

const AddNote = ({ handleAdd } ) => {
  const [noteText, setNoteText] = useState(""); 
  const characterLimit = 200; 

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >=0){
      setNoteText(e.target.value);
    }
    

  }; 
  const handleSaveClick = () =>{
    if(noteText.trim().length > 0) {
      handleAdd(noteText);
      setNoteText(""); 
  }
  }; 


  return (
    <div className='note new'>
      <textarea 
        rows="8"
        col="10"
        placeholder="Type to add a Note..."
        value={noteText}
        onChange={handleChange}
        ></textarea>

      <div className='notes-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote