import React from 'react'
import { IoCaretBackOutline } from 'react-icons/io5'

const ErrorPage = () => {
    return (
        <div className='errorNext'>
            <button className='button-60 back pogisan' onClick={()=>history.back()}>
                <span>
                    <IoCaretBackOutline />
                </span>
                Back
            </button>
            <p>Page Not Found</p>
        </div>
    )
}

export default ErrorPage