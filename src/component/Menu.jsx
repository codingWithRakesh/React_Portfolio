import React from 'react'
import { TbGridDots } from 'react-icons/tb'

const Menu = ({menuCheck, setMenuCheck}) => {
  return (
    <div className='menu boxShadows' onClick={(event) => {setMenuCheck(!menuCheck);event.stopPropagation();}}>
        <TbGridDots />
    </div>
  )
}

export default Menu