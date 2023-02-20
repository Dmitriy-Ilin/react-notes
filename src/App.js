import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'value1',
    date: '17.01.2023'
   },
   {
    id: nanoid(),
    text: 'value2',
    date: '17.01.2023'
   },
   {
    id: nanoid(),
    text: 'value3',
    date: '17.01.2023'
   },
    {
    id: nanoid(),
    text: 'value4',
    date: '17.01.2023'
   },
  ]);

  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${theme && 'dark-theme'}`}>
       <div className="container">
        <Header handleToggleTheme={setTheme}/>
        <Search handleSearch={setSearchText}/>
        <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
