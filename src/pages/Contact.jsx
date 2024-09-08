import React, { useContext, useEffect, useRef, useState } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import GIFContact from '../assets/images/contact.gif'
import { FiSend } from 'react-icons/fi'
import { useTopLoader } from '../contexts/topLoderContext'
import { SlCheck } from 'react-icons/sl'
import loadingGif from '../assets/images/loading.gif'

const Contact = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 20)
  }, [setProgress])

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useRef(null)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzpMQEiXYpkx5Skzqa85Y4K9Z8WZEOSatP0Y4lAdFF1GeFJNhedwVABjbWgCcPLXPmt/exec'

  const submitForm = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
      .then(response => {
        setLoading(false)
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
        }, 1000)
        form.current.reset()
      })
      .catch(error => {
        setLoading(false)
        console.error('Error!', error.message)
      })
  }

  return (
    <div className={`mainContainer contact ${sidebar ? "mainContainerSmall" : ""}`}>
      <div className="showGIF">
        <img src={GIFContact} alt={GIFContact} />
      </div>
      <form className="inputContact boxShadows" action="#" ref={form} name="submit-to-google-sheet" onSubmit={submitForm}>
        <input type="text" placeholder='Name' className='firstRow' name="Name" required />
        <input type="email" placeholder='Email' className='firstRow' name="Email" required />
        <input type="text" placeholder='Subject' className='firstRow' name="Subject" required />
        <textarea placeholder='Message...' className='lastRow' name="Message" required></textarea>

        <button type='submit' className='button-60 contactButton'>
          {loading ? (
            <>
              Loading...
              <img src={loadingGif} alt="loading" />
            </>
          ) : isSubmitted ? (
            <>
              Submitted <SlCheck />
            </>
          ) : (
            <>
              Submit <FiSend />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default Contact
