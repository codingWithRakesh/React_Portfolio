import React from 'react';
import { useFonts } from '../contexts/fontContext';
import { IoIosArrowDown } from "react-icons/io";
import { useCroseFont } from '../contexts/croseFontContext';

const Fonts = () => {
  const [[croseF, setCroseF]] = useCroseFont();
  const [[fonts, setAllFonts]] = useFonts();

  const handleFontChange = (data) => {
    localStorage.setItem('fontsV', data.value);
    setAllFonts(localStorage.getItem('fontsV'));
  };

  const activeShow = (e) => {
    e.stopPropagation();
    setCroseF(!croseF);
  };

  return (
    <div className='fonts' onClick={activeShow}>
      Change Fonts 
      <span>
        <IoIosArrowDown />
      </span>
      {croseF && <div className="showFonts">
        {fonts.map((data, index) => (
          <div key={index} onClick={() => handleFontChange(data)} className={`showResult ${data.className} ${data.isTrue ? "fontsActive" : ""}`}>
            {data.label}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Fonts;
