import React from 'react'
import { MdDeleteForever } from "react-icons/md"; 


const Note = ({ text, date, id, handleDelete }) => {

  
  return (
  <div className='note'>
    <span>{text}</span>

      <div className='notes-footer'>
      <small>{date}</small>
      <MdDeleteForever 
      onClick = { () => handleDelete(id) }
      className='delete-icon' size="1.3rem" 
       />

      </div>
  </div>
  )
}

export default Note