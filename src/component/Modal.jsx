import React, { useContext, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useModal } from '../contexts/modalProvider';
import Modes from './Modes';
import { useMode } from '../contexts/modeChangeContext';
import Fonts from './Fonts';
import { useCroseFont } from '../contexts/croseFontContext';

const Modal = () => {
  const [[closeModal, setCloseModal]] = useModal()
  const [[allThemes]] = useMode()
  const [[,setCroseF]] = useCroseFont()

  return (
    <div className='modarContainer' onClick={(event) => { 
      event.stopPropagation(); 
      setCroseF(false) 
      }}>
      <div className="controlsSetting ">
        <h2>Settings</h2>
        <div onClick={() => setCloseModal(!closeModal)}>
          <RxCross1 />
        </div>
      </div>
      <div className="children">
        <Fonts/>
        {allThemes.map((data,index) => {
          return (<Modes data={data} key={index}/>)
        })}
      </div>
    </div>
  )
}

export default Modal
