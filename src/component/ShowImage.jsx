import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useModal } from '../contexts/modalProvider';
import { useCroseFont } from '../contexts/croseFontContext';
import image from "../assets/images/TARAPADA.jpeg"
import { useImageShow } from '../contexts/imageContext';

const ShowImage = () => {
    const [[closeModal, setCloseModal]] = useModal()
      const [[,setCroseF]] = useCroseFont()
    const [imageShow, setImageShow] = useImageShow();
  return (
    <div className='modarContainer' onClick={(event) => { 
      event.stopPropagation(); 
      setCroseF(false) 
      }}>
      <div className="controlsSetting ">
        <h2>Image</h2>
        <div onClick={() => setImageShow({ ...imageShow, isOn: false })}>
          <RxCross1 />
        </div>
      </div>
      <div className="childrenNew">
        <img src={imageShow.image || image} alt="" />
      </div>
    </div>
  )
}

export default ShowImage