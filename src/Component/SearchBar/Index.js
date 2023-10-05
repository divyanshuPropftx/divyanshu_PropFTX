import React, { useState } from 'react';
import './Index.css'
import Icon from '../../Assets/search.png'

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Call the onSearch callback with the searchText as an argument
    onSearch(searchText);
  };

  return (
    <div className='flex flex-row justify-center'>
            <div className='searchBar flex flex-row'>
                <div className="search-container w-full flex flex-row justify-between pl-8 bg-white">
                <div className='magnifyingGlass flex flex-col justify-center bg-white text-white'><img src={Icon}/></div>
                <input
                    className='inputSearch pl-4'
                    type="text"
                    placeholder="Ask a question"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className='flex flex-col justify-center pr-2 pl-2 bg-white'>
                <button className='searchButton text-white bg-pink text-xl rounded-lg font-bold pl-4 pr-4' onClick={handleSearch}>Search</button>
                </div>
                </div>
            </div>
    </div>
  );
}

export default SearchBar;
