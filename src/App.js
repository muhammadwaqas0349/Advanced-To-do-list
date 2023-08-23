import { useEffect, useState } from 'react';
import { nanoid } from "nanoid"; 
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  const [notes, setNotes] = useState([{

    id: nanoid(), 
    text: "This is first Note", 
    date: "20/08/2023"
  }, 
  {
    id: nanoid(), 
    text: "This is Second Note", 
    date: "21/08/2023"
  }, 
  {
    id: nanoid(), 
    text: "This is Third Note", 
    date: "22/08/2023"
  }
]); 
const [searchtext, setSearchText] = useState(""); 
const [darkMode, setDarkMode] = useState(false); 


useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
}, [notes]);


const addNote = (text) => {
  const date = new Date(); 
  const newNote = {
    id: nanoid(), text: text, date: date.toLocaleString(),
  }; 
  const newNotes = [...notes, newNote]; 
  setNotes(newNotes); 
  
}; 

const  deleteNote = (id) => {
  const newNotes = notes.filter( (note) => note.id !== id); 
    setNotes(newNotes); 
  };   

  return (
    <div className={`${darkMode && "dark-mode"}`}>
          <div className='container'>
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearch={setSearchText} />
          <NotesList 
          notes={notes.filter((note) => note.text.includes(searchtext))} 
          handleAdd={addNote}
          handleDelete={deleteNote}
          />
      
           </div>
    </div>
    
  );
  }; 

export default App;
