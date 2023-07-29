import React from 'react';

const SearchBox = ({searchChange}) =>{
  return (
    <div className='pa3'>
    <input className='ba b--green bg-lightest-blue br3 pa3 ma2' type='search' 
    placeholder='Search Robots'
    onChange = {searchChange}
    />
    </div>
   );
}
export default SearchBox;