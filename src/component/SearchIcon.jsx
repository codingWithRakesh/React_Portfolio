import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const SearchIcon = ({setshowInput, setSetshowInput}) => {
  return (
    <div className='searchIcon' onClick={() => setSetshowInput(!setshowInput)}>
        <IoMdSearch />
    </div>
  )
}

export default SearchIcon