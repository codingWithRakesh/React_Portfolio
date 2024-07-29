import React, { useContext, useEffect, useRef, useState } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import GIFContact from '../assets/images/contact.gif'
import { FiSend } from 'react-icons/fi'
import { useTopLoader } from '../contexts/topLoderContext'
import { SlCheck } from 'react-icons/sl'

const Contact = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 20)
  }, [setProgress])

  const [isTrue, setIsTrue] = useState(false)
  const form = useRef(null)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyXZOwoKIQ_Dm1qLrXOcp1qC8205nP0bRVWGMHNFa45hztL7QHPxDOT1unsYKJFNrRg/exec'
  const sumnitFun = (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
      .then(response => {
        setIsTrue(true)
        setTimeout(() => {
          setIsTrue(false)
        }, 1000)
        form.current.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }

  return (
    <div className={`mainContainer contact ${sidebar ? "mainContainerSmall" : ""}`}>
      <div className="showGIF">
        <img src={GIFContact} alt={GIFContact} />
      </div>
      <form className="inputContact boxShadows" action="#" ref={form} name="submit-to-google-sheet" onSubmit={sumnitFun}>
        <input type="text" placeholder='Name' className='firstRow' name="Name" required />
        <input type="email" placeholder='Email' className='firstRow' name="Email" required />
        <input type="text" placeholder='Subject' className='firstRow' name="Subject" required />
        <textarea placeholder='Message...' className='lastRow' name="Message" required></textarea>
        <button type='submit' className='button-60 contactButton'>{isTrue ? "Submited" : "Submit"}{isTrue ? <SlCheck /> : <FiSend />}</button>
      </form>
    </div>
  )
}

export default Contact
