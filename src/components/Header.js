import React from 'react'

function Header({handleToggleTheme}) {
  return (
    <div className='header'>
        <h1>Напоминания</h1>
        <button 
        className='save' 
        onClick={() => handleToggleTheme((previousTheme) => !previousTheme)}>
            Сменить тему
        </button>
    </div>
  )
}

export default Header