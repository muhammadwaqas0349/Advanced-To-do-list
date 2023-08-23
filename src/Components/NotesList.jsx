import Note from './Note';
import AddNote from './AddNote';


const NotesList = ({ notes, handleAdd, handleDelete }) => {
  return (
    <div className='notes-list'>
        {notes.map((note) => (
          <Note 
          text={note.text} id={note.id} date={note.date} key={note.id}
          handleDelete={handleDelete}
          />
        ))}

        <AddNote handleAdd={handleAdd}
        />
      
    </div>
  )
}

export default NotesList