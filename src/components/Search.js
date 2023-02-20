import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearch}) {
  return (
    <div className='search'>
        <MdSearch className='search__components' size='1.3em'/>
        <input type='text' placeholder='Напишите для поиска' onChange={(e) => handleSearch(e.target.value)}></input>
    </div>
  )
}

export default Search