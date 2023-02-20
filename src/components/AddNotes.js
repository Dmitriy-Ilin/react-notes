import React, { useState } from 'react'

function AddNotes({handleAddNote}) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0) {
        setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText('');
    }
    
  }

  return (
    <div className='note new'>
        <textarea 
        rows='8' 
        cols='10' 
        placeholder='Напишите, чтобы добавить напоминание'
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <div className='note__footer'>
            <small>Осталось символов: {characterLimit - noteText.length}</small>
            <button className='save' onClick={handleSaveClick}>Сохранить</button>
        </div>
    </div>
  )
}

export default AddNotes