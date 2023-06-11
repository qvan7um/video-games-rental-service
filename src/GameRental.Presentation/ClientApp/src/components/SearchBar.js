import React from 'react';
import './SearchBar.css';

const SearchBar = ({value, changeInput}) => {
  return (
    <div className='searchbar-wrap'>
      <div className='back'>

        <i className='func fa fa-arrow-left'/>
      </div>
          <div className='search-wrap'>

          <i className='func fa fa-search' />
          <input 
            type='text'
            placeholder='Tìm kiếm'
            value={value}
            onChange={changeInput}
            />
          </div>
        <div className='exit'>

        <i className='func fa fa-times'/>
        </div>
    </div>
  )
}

export default SearchBar;