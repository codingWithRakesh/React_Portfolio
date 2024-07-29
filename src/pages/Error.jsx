import React from 'react'
import '../App.css'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const errors = useRouteError()
  return (
    <div className='error'>
      <h1> {errors.status}</h1> <p>{errors.statusText}</p>
    </div>
  )
}

export default Error
