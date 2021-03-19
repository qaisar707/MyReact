import React from 'react';
import './searchBox.style.css'
export  const SearchBox=({placeholder,handleChange})=>
{
    return(
<input
type='search'
className='Sbox'
placeholder={placeholder}
onChange={handleChange}
/>
    );
}
export default SearchBox;