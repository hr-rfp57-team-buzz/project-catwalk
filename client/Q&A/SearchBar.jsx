import React, { useState } from 'react';


const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  return (
    <div className="search-wrapper">
      <form>
        <input onChange={(e) => {setTerm(e.target.value)}} className="search-bar" type="text" placeholder="Have A Question? Search For Answers..."/>
        <button className="search-button"><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBar;