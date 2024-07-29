import React from 'react'
import { useFonts } from '../contexts/fontContext'
import { IoIosArrowDown } from "react-icons/io";
import { useCroseFont } from '../contexts/croseFontContext';

const Fonts = () => {
  const [[croseF, setCroseF]] = useCroseFont()
  const activeShow = (e) => {
    e.stopPropagation()
    setCroseF(!croseF)
  }

  const [[fonts,setAllFonts]] = useFonts()

  return (
    <div className='fonts' onClick={activeShow}>
      Change Fonts 
      <span>
      <IoIosArrowDown />
      </span>
      {croseF && <div className="showFonts">
        {fonts.map((data,index) => (<div key={index} onClick={() => setAllFonts(data.value)} className={`showResult ${data.className} ${data.isTrue ? "fontsActive" : ""}`}>{data.label}</div>))}
      </div>}
    </div>
  )
}

export default Fonts
